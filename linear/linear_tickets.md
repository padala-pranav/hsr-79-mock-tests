# Linear App Ticket Package: Sushruta Feature 10 — Mock Tests (10/20)

This document contains the complete, ready-to-copy Linear tickets (Epic, User Stories, Technical Tasks, Acceptance Criteria, Estimates, and QA Test Cases) for **Feature 10: Mock Tests** of the Sushruta NEET Preparation Platform.

---

## 🏛️ EPIC: [SUSHRUTA-100] Feature 10: Mock Tests (10/20) — Exam Simulation & Preparation Evaluation

- **Team:** Sushruta Core Engineering & Product
- **Project:** Sushruta NEET 2026 Companion
- **Priority:** High (P1)
- **Status:** Backlog / Ready for Dev
- **Target Release:** Sprint 10
- **Summary:**
  Take full-length and chapter-wise mock tests to simulate the NEET exam experience and evaluate overall preparation.
- **Key Feature Tenets:**
  1. **Exam-like Experience**: Real NEET pattern with timer and subject-wise sections (Physics, Chemistry, Biology).
  2. **Multiple Test Types**: Full-length tests, chapter-wise tests, and subject-wise tests.
  3. **Instant Results**: Immediate score (/720), AIR rank predictor, percentile, and detailed performance analysis.
  4. **Detailed Analysis**: Subject-wise accuracy, strengths, weaknesses, and historical progress comparison.
  5. **Attempt Again**: Re-attempt tests to track score improvement over time.
- **Branding Quotes & Motivation:**
  - *"Learn Today, Heal Tomorrow"*
  - *"Practice like the exam, perform like a doctor."*
  - *"Better Students, Brighter Doctors"*
  - *"From Dream To Doctor"*

---

## 📋 USER STORIES & ISSUES FOR LINEAR

### 1. [SUSHRUTA-101] Test Catalog & Multi-Type Selection Hub
- **Issue Type:** Feature / Story
- **Parent Epic:** `[SUSHRUTA-100]`
- **Estimate:** 3 Points
- **Priority:** High
- **Labels:** `frontend`, `ui/ux`, `mobile-first`
- **Description:**
  As a NEET aspirant, I want to browse and choose between Full-Length Mock Tests, Chapter-wise Tests, and Subject-wise Tests so that I can practice according to my current study schedule.
- **Acceptance Criteria:**
  - [x] Segmented pill control supporting `Full Tests`, `Chapter-wise`, and `Subject-wise` views.
  - [x] Test cards show: Title (`Mock Test 1-5`), Subtitle (`Full Syllabus (NEET Pattern)`), Duration (`3 Hours` / `45 Mins`), Question count (`200 Questions`), and Difficulty badge (`Moderate` / `Difficult`).
  - [x] Test Details Modal opening with syllabus breakdown, duration, max score (720 marks), and NEET marking scheme (+4 / -1 / 0).
  - [x] Inspirational bottom progress banner: *"Track Your Progress — Take tests regularly to improve your score and move closer to your dream."*

---

### 2. [SUSHRUTA-102] NTA CBT Live Exam Simulator Interface
- **Issue Type:** Feature / Story
- **Parent Epic:** `[SUSHRUTA-100]`
- **Estimate:** 5 Points
- **Priority:** Urgent (P0)
- **Labels:** `frontend`, `cbt-engine`, `state-machine`
- **Description:**
  As a NEET aspirant, I want an authentic NTA CBT exam simulator with countdown timer, question palette, and section navigation so that I get used to the real exam pressure and format.
- **Acceptance Criteria:**
  - [x] Live countdown timer initialized with 200 minutes (or test duration), with red pulse warning at `< 5 minutes` and auto-submit upon timeout.
  - [x] Subject section switching (Physics Sec A/B, Chemistry Sec A/B, Botany Sec A/B, Zoology Sec A/B).
  - [x] Official NTA Question Palette tracking 5 states:
    - 🟢 Green: Answered
    - 🔴 Red: Not Answered
    - 🟣 Purple: Marked for Review
    - 🟣🟢 Purple with green indicator: Answered & Marked for Review
    - ⚪ Gray: Not Visited
  - [x] Actions: `Clear Response`, `Mark for Review & Next`, `Save & Next`, and `Submit Test`.
  - [x] LaTeX math & chemical equation rendering for complex physics/chemistry questions.
  - [x] Confirmation modal before submission displaying breakdown of answered, skipped, and marked questions.

---

### 3. [SUSHRUTA-103] Instant Scorecard, AIR Predictor & Performance Analytics
- **Issue Type:** Feature / Story
- **Parent Epic:** `[SUSHRUTA-100]`
- **Estimate:** 5 Points
- **Priority:** High
- **Labels:** `analytics`, `scoring-engine`, `data-viz`
- **Description:**
  As a NEET aspirant, I want instant score calculation, predicted All India Rank (AIR), percentile, and medical college eligibility after submitting a test.
- **Acceptance Criteria:**
  - [x] Official NEET UG Scoring: `+4` for correct, `-1` for incorrect, `0` for unattempted (Max 720).
  - [x] AIR Predictor model calculating rank range (e.g., `AIR 12k - 18k`) and percentile based on score.
  - [x] Medical College Cutoff Barometer (AIIMS/MAMC Top Tier, Top State GMC MBBS, State GMC/BDS, Semi-Govt/Ayush).
  - [x] Subject-wise breakdown displaying accuracy percentage, correct/incorrect/skipped counts for Physics, Chemistry, Botany, and Zoology.

---

### 4. [SUSHRUTA-104] Interactive Mistake Book, NCERT Solutions & Re-Attempt Flow
- **Issue Type:** Feature / Story
- **Parent Epic:** `[SUSHRUTA-100]`
- **Estimate:** 3 Points
- **Priority:** Medium
- **Labels:** `solutions`, `ncert-grounding`, `learning-loop`
- **Description:**
  As a NEET aspirant, I want step-by-step NCERT-grounded explanations for all questions and the ability to re-attempt tests to track my score improvement.
- **Acceptance Criteria:**
  - [x] Filter solutions by `All`, `Incorrect`, `Skipped`, and `Correct`.
  - [x] Step-by-step explanations with formula derivations and exact NCERT textbook page references.
  - [x] `Re-attempt Test` button resetting response state while persisting previous attempt in LocalStorage history.
  - [x] Test History modal displaying historical attempt timelines, score progression, and accuracy comparison.

---

## 🧪 QA TEST CASES & VERIFICATION MATRIX

| Test ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| **TC-101** | Tab Switching between Full / Chapter / Subject | Test list updates instantly with corresponding tests and badges | Pass |
| **TC-102** | Start CBT Session & Timer Verification | Timer counts down from 200:00, persists state, warnings under 5 mins | Pass |
| **TC-103** | Question Palette Color Transition | Colors correctly transition from Not Visited -> Not Answered -> Answered -> Marked | Pass |
| **TC-104** | NEET Marking Scheme Calculation | Exactly +4 for correct, -1 for incorrect, total matches out of 720 | Pass |
| **TC-105** | Rank & College Cutoff Prediction | Predicts AIR range & assigns appropriate GMC eligibility badge | Pass |
| **TC-106** | NCERT Solution Math & Formula Display | Formulas render cleanly without escaping or layout breakage | Pass |
| **TC-107** | Re-Attempt Test & History Logging | Attempt is recorded in History modal and new clean session begins | Pass |
