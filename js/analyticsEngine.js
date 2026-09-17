// Sushruta Analytics Engine
// Official NEET UG Scoring (+4 Correct, -1 Incorrect, 0 Unattempted, Max 720)
// AIR Rank Predictor & Percentile Calibrator

export const AnalyticsEngine = {
  calculateScorecard(test, userResponses, timeSpentSeconds) {
    let totalQuestions = 0;
    let attempted = 0;
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    let score = 0;

    const subjectBreakdown = {};

    test.sections.forEach(section => {
      section.questions.forEach(q => {
        totalQuestions++;
        const subj = q.subject || section.name || "General";
        if (!subjectBreakdown[subj]) {
          subjectBreakdown[subj] = {
            subject: subj,
            total: 0,
            attempted: 0,
            correct: 0,
            incorrect: 0,
            unattempted: 0,
            score: 0,
            maxScore: 0
          };
        }

        subjectBreakdown[subj].total++;
        subjectBreakdown[subj].maxScore += 4;

        const resp = userResponses[q.id];
        const selected = resp ? resp.selectedOption : null;

        if (selected !== null && selected !== undefined) {
          attempted++;
          subjectBreakdown[subj].attempted++;

          if (selected === q.correctAnswer) {
            correct++;
            score += 4;
            subjectBreakdown[subj].correct++;
            subjectBreakdown[subj].score += 4;
          } else {
            incorrect++;
            score -= 1;
            subjectBreakdown[subj].incorrect++;
            subjectBreakdown[subj].score -= 1;
          }
        } else {
          unattempted++;
          subjectBreakdown[subj].unattempted++;
        }
      });
    });

    const scaledMaxScore = test.maxScore || (totalQuestions * 4);
    const scaledScore = Math.max(0, score);
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const completionRate = totalQuestions > 0 ? Math.round((attempted / totalQuestions) * 100) : 0;

    const predictedAir = this.predictAIR(scaledScore, scaledMaxScore);
    const percentile = this.calculatePercentile(scaledScore, scaledMaxScore);
    const collegeEligibility = this.evaluateCollegeCutoffs(scaledScore);

    return {
      testId: test.id,
      testTitle: test.title,
      timestamp: new Date().toISOString(),
      score: scaledScore,
      maxScore: scaledMaxScore,
      accuracy,
      completionRate,
      totalQuestions,
      attempted,
      correct,
      incorrect,
      unattempted,
      timeSpentSeconds,
      predictedAir,
      percentile,
      collegeEligibility,
      subjectBreakdown: Object.values(subjectBreakdown)
    };
  },

  predictAIR(score, maxScore) {
    if (score >= 710) return "AIR 1 - 50";
    if (score >= 690) return "AIR 51 - 350";
    if (score >= 670) return "AIR 351 - 1,200";
    if (score >= 640) return "AIR 1,201 - 5,500";
    if (score >= 610) return "AIR 5,501 - 15,000";
    if (score >= 580) return "AIR 15,001 - 32,000";
    if (score >= 520) return "AIR 32,001 - 75,000";
    if (score >= 450) return "AIR 75,001 - 1,50,000";
    if (score >= 350) return "AIR 1,50,001 - 3,00,000";
    return "AIR > 3,00,000";
  },

  calculatePercentile(score, maxScore) {
    const ratio = Math.max(0, Math.min(1, score / maxScore));
    if (ratio > 0.95) return 99.95;
    if (ratio > 0.90) return 99.40;
    if (ratio > 0.85) return 98.60;
    if (ratio > 0.75) return 96.20;
    if (ratio > 0.65) return 91.50;
    if (ratio > 0.50) return 82.00;
    return Math.round(ratio * 80 * 100) / 100;
  },

  evaluateCollegeCutoffs(score) {
    if (score >= 680) {
      return {
        badge: "AIIMS / MAMC Level",
        color: "emerald",
        description: "High chance for Top Tier National Medical Colleges (AIIMS New Delhi, JIPMER, MAMC)",
        status: "Guaranteed GMC Seat"
      };
    } else if (score >= 615) {
      return {
        badge: "Top State GMC (MBBS)",
        color: "teal",
        description: "Strong qualification for State Top Medical Colleges (MBBS)",
        status: "Safe GMC MBBS"
      };
    } else if (score >= 560) {
      return {
        badge: "State GMC / Govt BDS",
        color: "blue",
        description: "Eligible for State Quota GMC MBBS / Central Govt Dental (BDS)",
        status: "Borderline GMC"
      };
    } else if (score >= 450) {
      return {
        badge: "Govt BAMS / BHMS / Semi-Govt MBBS",
        color: "amber",
        description: "Eligible for Top Ayush Government colleges or Semi-Govt MBBS",
        status: "Ayush / Semi-Govt"
      };
    } else {
      return {
        badge: "Needs Remedial Focus",
        color: "rose",
        description: "Focus on High-Yield Chapter Tests and eliminate negative marking",
        status: "Booster Needed"
      };
    }
  }
};
