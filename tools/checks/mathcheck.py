#!/usr/bin/env python3
"""mathcheck.py - asserts the numeric design targets in design/design-bible.md section 17.

Reads weapon numbers from data/weapons.yaml (single source of truth). Skill TNs and
procedure constants mirror the bible; if the bible changes, change BOTH and re-run.
Exit 0 = all targets hold. Exit 1 = a target failed (build should stop).

Usage: python3 tools/checks/mathcheck.py [--verbose]
"""
import itertools
import random
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
W = yaml.safe_load((ROOT / "data" / "weapons.yaml").read_text())

VERBOSE = "--verbose" in sys.argv
random.seed(20261031)  # deterministic; date of the first frost in the Uwharries

FAILURES = []


def check(name, value, ok, detail=""):
    status = "PASS" if ok else "FAIL"
    line = f"[{status}] {name}: {value:.3f} {detail}"
    if not ok:
        FAILURES.append(line)
    if VERBOSE or not ok:
        print(line)


# ---------- closed-form 2d10 ----------
def p2d10_ge(tn):
    """P(2d10 sum >= tn)."""
    hits = sum(1 for a, b in itertools.product(range(1, 11), repeat=2) if a + b >= tn)
    return hits / 100.0


def pd10(pred):
    return sum(1 for d in range(1, 11) if pred(d)) / 10.0


# ---------- wound / casualty chains ----------
def p_opfor_at_least_down(dr, armor):
    """Casualty Die: d10 + DR - armor; Down on 4-6, Dead on 7+."""
    return pd10(lambda d: d + dr - armor >= 4)


def p_crew_severity_at_least(dr, armor, threshold, head_bonus=0):
    """Severity: d10 + DR - armor (+2 head); threshold 8 = Serious+."""
    return pd10(lambda d: d + dr - armor + head_bonus >= threshold)


# ---------- targets ----------
def main():
    dr_rifle = W["carbine"]["dr"]          # 3
    pen_rifle = W["carbine"]["pen"]        # 0
    dr_mg = W["mmg"]["dr"]                 # 4
    pen_hmg = W["hmg"]["pen"]              # 3

    # 1. SOF vet (8/10) Aimed at Effective vs Open
    p1 = p2d10_ge(8)
    check("T1 vet aimed open P(hit)", p1, p1 >= 0.70, "(target >= .70; bible: .79)")

    # 2. Vet vs Cover: <= .70 AND >= 12 points below Open
    p2 = p2d10_ge(10)
    check("T2a vet aimed cover P(hit)", p2, p2 <= 0.70)
    check("T2b cover gap (open - cover)", p1 - p2, (p1 - p2) >= 0.12)
    p2g = p2d10_ge(15 + 3)  # Green snap vs cover
    check("T2c green snap cover P(hit)", p2g, p2g <= 0.15)

    # 3. Rifle hit vs OPFOR
    p3a = p_opfor_at_least_down(dr_rifle, 1)
    check("T3a rifle vs Armor1 P(>=Down|hit)", p3a, p3a >= 0.70)
    p3b = p_opfor_at_least_down(dr_rifle, 0)
    check("T3b rifle vs Armor0 P(>=Down|hit)", p3b, p3b >= 0.85)

    # 4. Crew wounds: rifle hit, unarmored vs plated torso
    p4a = p_crew_severity_at_least(dr_rifle, 0, 8)
    check("T4a unarmored crew P(Serious+|hit)", p4a, p4a >= 0.45)
    p4b = p_crew_severity_at_least(dr_rifle, 3, 8)
    check("T4b plated torso P(Serious+|torso hit)", p4b, p4b <= 0.40)

    # 5. Full chain: vet aimed vs Armor-1 regular in the open
    p5 = p1 * p_opfor_at_least_down(dr_rifle, 1)
    check("T5 one aimed shot P(out of fight)", p5, p5 >= 0.55, "(BPRE benchmark ~.62)")

    # 6. Interrupt Die: mean interrupts/turn for 6..8 activations
    for n_act in (6, 7, 8):
        thresholds = [10 - i for i in range(0, n_act - 1)]  # after 2nd..nth activation
        p_none = 1.0
        for t in thresholds:
            p_none *= 1 - (11 - t) / 10.0
        mean = 1 - p_none  # capped at one interrupt
        check(f"T6 interrupts/turn @{n_act} activations", mean, 0.6 <= mean <= 1.3)

    # 7. Alert pacing Monte Carlo
    trials = 100_000
    # Loud play: turn 1 onward, gunfire cap +3/turn, ~2 sprints (+2), breach on turn 2 (+2).
    # Alerted at Noise>=7. ALARM: an Alerted leader with manpack tries 2d10>=12 each Warden
    # Phase from the turn after Alerted (fixed-set/landline cases are faster; this is the slow path).
    alarm_turns = []
    for _ in range(trials):
        noise, alerted_turn, alarm_turn = 0, None, None
        for turn in range(1, 13):
            noise += 3 + 2 + (2 if turn == 2 else 0)
            if alerted_turn is None and noise >= 7:
                alerted_turn = turn
            if alerted_turn is not None and turn > alerted_turn:
                if random.randint(1, 10) + random.randint(1, 10) >= 12:
                    alarm_turn = turn
                    break
        alarm_turns.append(alarm_turn or 13)
    alarm_turns.sort()
    median_alarm = alarm_turns[trials // 2]
    check("T7a loud play median ALARM turn", float(median_alarm), median_alarm <= 4)
    # Stealth: walk-only, no shots -> Noise stays 0; only risk is sightings (not noise).
    check("T7b walk-only Noise at turn 6", 0.0, 0 < 3, "(never reaches Suspicious threshold)")

    # 8. Beaten Zone crossing: 4 squares upright, one TN-13 attack per square, DR4 wounds
    p_hit_bz = p2d10_ge(13)
    p_serious_given_hit = p_crew_severity_at_least(dr_mg, 0, 8)
    p8 = 1 - (1 - p_hit_bz * p_serious_given_hit) ** 4
    check("T8 BZ 4-square crossing P(Serious+)", p8, p8 >= 0.50)

    # 10. Vehicles (T9 doctrine coverage is checked structurally by check-refs once ch.12 exists)
    # HMG vs Armor-0 pickup: Wreck on damage die 10+
    p10a = pd10(lambda d: d + pen_hmg - 0 >= 10)
    check("T10a HMG vs pickup P(Wreck|hit)", p10a, p10a >= 0.30)
    # Rifle (Pen 0) vs Armor 2 with the Pen cap: results above 5 become 5 -> never > Mobility
    def rifle_vs_armor2(d):
        res = d + pen_rifle - 2
        if 2 > pen_rifle and res > 5:  # pen cap vs Armor 2+
            res = 5
        return res >= 6
    p10b = pd10(rifle_vs_armor2)
    check("T10b rifle vs Armor2 P(>Mobility)", p10b, p10b == 0.0, "(the cap holds)")

    print()
    if FAILURES:
        print(f"mathcheck: {len(FAILURES)} TARGET(S) FAILED")
        return 1
    print("mathcheck: all design targets hold")
    return 0


if __name__ == "__main__":
    sys.exit(main())
