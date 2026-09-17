# Sushruta — NEET Mock Tests Module (`HSR-79`)

> **Feature 10: Mock Tests (10/20)**  
> *Take full-length and chapter-wise mock tests to evaluate your NEET UG preparation.*  
> *"Practice like the exam, perform like a doctor."*

---

## 🌟 Overview

**Sushruta Mock Tests** is an authentic exam simulation and preparation evaluation ecosystem built for NEET UG aspirants. It replicates the official NTA Computer-Based Test (CBT) interface, calculates official NEET marking (+4, -1, 0), predicts All India Rank (AIR), and provides step-by-step NCERT-grounded solutions with mistake tracking.

---

## 🎯 Key Features & Modules

### 1. 📚 Multiple Test Types Hub
- **Full-Length Tests**: 200 Questions / 720 Marks / 3 Hours 20 Mins (Physics, Chemistry, Botany, Zoology with Section A & Section B).
- **Chapter-wise Tests**: Targeted high-yield chapter tests (Genetics, Optics, Thermodynamics, Chemical Bonding, etc.).
- **Subject-wise Tests**: Specialized subject simulations for Physics, Chemistry, and Biology.

### 2. ⏱️ NTA CBT Live Exam Simulator
- **Live 200-Minute Countdown Timer** with alert state (`< 5 mins`) and auto-submission on timeout.
- **Official 5-State Question Palette**:
  - 🟢 **Answered** (Green badge)
  - 🔴 **Not Answered** (Red badge)
  - 🟣 **Marked for Review** (Purple circular badge)
  - 🟣🟢 **Answered & Marked for Review** (Purple badge with green dot)
  - ⚪ **Not Visited** (Light gray badge)
- **Exam Actions**: `Clear Response`, `Mark for Review & Next`, `Save & Next`, and `Submit Test`.

### 3. 📊 Instant Scorecard & AIR Rank Predictor
- **Official NEET UG Marking**: `+4` for Correct, `-1` for Incorrect, `0` for Unattempted (Max 720).
- **AIR Rank & Percentile Prediction**: Calibrated against official NTA historical percentiles.
- **Government Medical College (GMC) Cutoff Barometer**: Evaluates student readiness for AIIMS New Delhi / MAMC, Top State GMCs (MBBS), Central Govt Dental (BDS), or Semi-Govt.
- **Subject Mastery Breakdown**: Detailed score, accuracy percentage, and time spent on Physics, Chemistry, Botany, and Zoology.

### 4. 📖 Mistake Book & NCERT Solution Review
- Step-by-step NCERT grounded explanations with exact textbook citations.
- Filter questions by `All`, `Incorrect`, `Skipped`, and `Correct`.
- **1-Click "Re-Attempt Test"** with longitudinal score progression history.

---

## 📂 Project Architecture

```
sushruta-mock-tests/
├── index.html                  # Interactive Single Page App & NTA Exam Shell
├── README.md                   # Project documentation
├── css/
│   └── styles.css              # Sushruta design system, NTA palette & mobile frame
├── js/
│   ├── app.js                  # App router, modal controllers & UI binding
│   ├── examEngine.js           # NTA CBT live exam simulator & palette state
│   ├── analyticsEngine.js      # +4/-1 scoring, AIR rank predictor & cutoff barometer
│   ├── storage.js              # LocalStorage persistence for attempts & history
│   └── data/
│       └── mockData.js         # Full Tests 1–5, Chapter Tests & Subject Tests
└── linear/
    └── linear_tickets.md       # Linear App Epic, User Stories & QA Test Matrix
```

---

## 🚀 Quickstart & Local Setup

### 1. Clone the Repository
```bash
git clone -b dev https://github.com/padala-pranav/hsr-79-mock-tests.git
cd hsr-79-mock-tests
```

### 2. Run Locally
You can open `index.html` directly in any browser, or start a local Python HTTP server:

```bash
python -m http.server 8080
```

Open **[http://localhost:8080](http://localhost:8080)** in your browser.

---

## 📋 Linear Traceability

- **Parent Epic:** `[SUSHRUTA-100]` Feature 10: Mock Tests (10/20)
- **Linear Issue Key:** `HSR-79`
- **Project:** NEET Test Series Application
- **Sub-tasks:**
  - `[SUSHRUTA-101]` Test Selection Hub & Multi-Type Navigation
  - `[SUSHRUTA-102]` NTA CBT Live Exam Simulator Engine
  - `[SUSHRUTA-103]` Instant Scorecard, AIR Predictor & Analytics Engine
  - `[SUSHRUTA-104]` NCERT Solutions Mistake Book & Re-Attempt Flow

---

## 🩺 Medical Mottos
- *"Learn Today, Heal Tomorrow"*
- *"Practice like the exam, perform like a doctor."*
- *"Better Students, Brighter Doctors"*
- *"From Dream To Doctor"*
