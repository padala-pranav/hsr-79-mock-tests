# Sushruta Mock Tests (`HSR-79`) — Complete Task Descriptions & Upload Pack

This single document contains all the copy-pasteable descriptions for **Linear (Main Issue & Sub-issues)**, **GitHub Repository**, and **Pull Request**.

---

## 1. 🐙 GitHub Repository Description (About Box)

```text
Sushruta NEET Mock Tests Module (Feature 10) — Full-length & chapter-wise NTA CBT exam simulator with instant scoring, AIR rank predictor, and NCERT solutions.
```

---

## 2. 📋 Linear Main Issue Description (`HSR-79 Mock Tests`)

```markdown
## 📌 Overview
Design and develop the Sushruta Mock Tests module (Feature 10: Mock Tests 10/20) to simulate the real NEET exam experience, provide instant score evaluation out of 720, predicted All India Rank (AIR), and chapter-wise diagnostics.

---

## 🎯 Key Capabilities
1. **Exam-like Experience**: Official NEET pattern with 200-minute live countdown timer, section navigation (Physics, Chemistry, Botany, Zoology), and 5-state NTA CBT question palette.
2. **Multiple Test Types**: Full-Length (200 Qs / 720 Marks), Chapter-wise targeted tests, and Subject-wise mastery tests.
3. **Instant Results**: Score calculated out of 720 (+4 for correct, -1 for incorrect, 0 for unattempted), percentile, and predicted AIR rank range.
4. **Detailed Analysis**: Subject-wise accuracy, speed diagnostics, and Government Medical College (GMC) cutoff barometer.
5. **Attempt Again**: One-click test re-attempt to track score improvement over time.

---

## 🏷️ Mottos & Badges
- *"Learn Today, Heal Tomorrow"*
- *"Practice like the exam, perform like a doctor."*
- *"Better Students, Brighter Doctors"*
- *"From Dream To Doctor"*

---

## ✅ Acceptance Criteria (Definition of Done)
- [x] Segmented tab switcher for `Full Tests`, `Chapter-wise`, and `Subject-wise`.
- [x] Test cards displaying Title, Subtitle, 3 Hours duration, 200 Questions, and Difficulty badges.
- [x] NTA CBT Live Exam simulator with 200-minute countdown timer and auto-submit on timeout.
- [x] Official Question palette with 5 states (Answered, Not Answered, Marked Review, Ans & Marked, Not Visited).
- [x] Instant Scorecard generated with AIR predictor and GMC cutoff readiness.
- [x] NCERT solution explanations with step-by-step formula derivations.
- [x] One-click test re-attempt and attempt history tracking.

---

## 🔗 Links & Deliverables
- **GitHub Repository (`dev` branch):** https://github.com/padala-pranav/hsr-79-mock-tests/tree/dev
- **Local Prototype URL:** `http://localhost:8080`
```

---

## 3. ➕ Sub-Issues Descriptions (For Linear Sub-Tasks)

### 🔹 Sub-Issue 1: `[FE] Test Selection Hub & Multi-Type Tab Navigation`
```markdown
- Implement segmented tab pills (Full Tests, Chapter-wise, Subject-wise).
- Render test cards displaying Title, Subtitle, 3 Hours duration, 200 Questions count, and Difficulty badge (Moderate/Difficult).
- Add motivational "Track Your Progress" bottom banner card.
```

### 🔹 Sub-Issue 2: `[FE/Engine] NTA CBT Live Exam Simulator & 5-State Palette`
```markdown
- 200-minute live countdown timer with red pulse warning (< 5 mins) and auto-submit on timeout.
- Subject Section navigation (Physics, Chemistry, Botany, Zoology).
- 5-state NTA Question Palette (Answered, Not Answered, Marked Review, Ans & Marked, Not Visited).
- Actions: Clear Response, Mark Review & Next, Save & Next, and Submit Test with summary modal.
```

### 🔹 Sub-Issue 3: `[BE/Analytics] Instant Scorecard, AIR Predictor & GMC Cutoff Barometer`
```markdown
- Official NEET UG scoring: +4 for correct, -1 for incorrect, 0 for unattempted (Max 720).
- All India Rank (AIR) prediction model and percentile calculator.
- Government Medical College (GMC) Cutoff Barometer (AIIMS, State GMC MBBS, BDS, Semi-Govt).
- Subject-wise accuracy and score breakdown across Physics, Chemistry, Botany, and Zoology.
```

### 🔹 Sub-Issue 4: `[FE] NCERT Solutions Mistake Book & Re-Attempt Flow`
```markdown
- Question solution review with filters: All, Incorrect, Skipped, Correct.
- Step-by-step NCERT-grounded explanations and textbook citations.
- 1-Click "Re-Attempt Test" button resetting session while saving history in LocalStorage.
```

---

## 4. 💬 Final Linear Activity Comment (To Post at Bottom of Ticket)

```markdown
🚀 **Task Implementation Complete & Ready for QA Review:**

- **Module:** Feature 10: Mock Tests (10/20)
- **GitHub Branch:** `dev` (https://github.com/padala-pranav/hsr-79-mock-tests/tree/dev)
- **Local Prototype URL:** `http://localhost:8080`
- **Deliverables Included:**
  1. Full NEET Mock Tests (Mock Tests 1–5, Chapter-wise, Subject-wise)
  2. NTA CBT Simulator Engine with live timer and 5-state palette
  3. Instant Scorecard, AIR Predictor & GMC Cutoff analysis
  4. Interactive NCERT Solutions and mistake book
  5. LocalStorage attempt history tracking
```

---

## 5. 🔀 Pull Request (PR) Description (If creating PR on GitHub)

```markdown
### 🚀 Summary of Changes
- Implemented **Feature 10: Mock Tests (10/20)** for the Sushruta NEET platform (Linear: `HSR-79`).
- Added full NTA CBT live exam engine with timer, section switcher, and 5-state question palette.
- Added instant NEET scoring engine (+4, -1, 0) with AIR rank predictor and GMC cutoff barometer.
- Integrated NCERT step-by-step solutions with LaTeX math support.
- Included full datasets for Mock Tests 1–5, Chapter-wise, and Subject-wise tests.

### 🧪 Testing & Verification
- Tested tab navigation (Full Tests, Chapter-wise, Subject-wise).
- Verified 200-min timer countdown and auto-submission on timeout.
- Verified scorecard accuracy and LocalStorage attempt history tracking.
```
