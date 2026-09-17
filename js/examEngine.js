// Sushruta CBT Exam Engine
// Handles Official NTA Simulation, Palette State, Timer, Section Switching, and Response Handling

export class ExamSession {
  constructor(testData, onTimeTick, onTimeout) {
    this.test = testData;
    this.allQuestions = [];
    this.flattenQuestions();
    
    this.currentIndex = 0;
    this.durationSeconds = (testData.durationMinutes || 200) * 60;
    this.timeRemaining = this.durationSeconds;
    this.timeSpent = 0;
    this.timerInterval = null;
    this.isSubmitted = false;

    this.responses = {};
    this.initResponses();

    this.onTimeTick = onTimeTick;
    this.onTimeout = onTimeout;
  }

  flattenQuestions() {
    this.allQuestions = [];
    this.test.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        this.allQuestions.push({
          ...q,
          sectionId: sec.id,
          sectionName: sec.name,
          globalIndex: this.allQuestions.length
        });
      });
    });
  }

  initResponses() {
    this.allQuestions.forEach((q, idx) => {
      this.responses[q.id] = {
        selectedOption: null,
        status: idx === 0 ? 'not_answered' : 'not_visited',
        timeSpent: 0
      };
    });
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.timeSpent++;
        
        const currentQ = this.getCurrentQuestion();
        if (currentQ && this.responses[currentQ.id]) {
          this.responses[currentQ.id].timeSpent++;
        }

        if (this.onTimeTick) {
          this.onTimeTick(this.timeRemaining, this.durationSeconds);
        }
      } else {
        this.stopTimer();
        if (this.onTimeout) this.onTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  getCurrentQuestion() {
    return this.allQuestions[this.currentIndex];
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.allQuestions.length) {
      this.currentIndex = index;
      const q = this.allQuestions[index];
      const resp = this.responses[q.id];
      if (resp.status === 'not_visited') {
        resp.status = 'not_answered';
      }
      return q;
    }
    return null;
  }

  selectOption(optionIndex) {
    const q = this.getCurrentQuestion();
    if (!q) return;
    this.responses[q.id].selectedOption = optionIndex;
    if (this.responses[q.id].status === 'marked_review' || this.responses[q.id].status === 'answered_review') {
      this.responses[q.id].status = 'answered_review';
    } else {
      this.responses[q.id].status = 'answered';
    }
  }

  clearResponse() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    this.responses[q.id].selectedOption = null;
    this.responses[q.id].status = 'not_answered';
  }

  markForReview() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    const hasOption = this.responses[q.id].selectedOption !== null;
    this.responses[q.id].status = hasOption ? 'answered_review' : 'marked_review';
    this.nextQuestion();
  }

  saveAndNext() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    const hasOption = this.responses[q.id].selectedOption !== null;
    if (hasOption) {
      this.responses[q.id].status = 'answered';
    } else if (this.responses[q.id].status === 'not_visited') {
      this.responses[q.id].status = 'not_answered';
    }
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.currentIndex < this.allQuestions.length - 1) {
      this.goToQuestion(this.currentIndex + 1);
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.goToQuestion(this.currentIndex - 1);
    }
  }

  getSummaryCounts() {
    let answered = 0;
    let notAnswered = 0;
    let markedReview = 0;
    let answeredMarked = 0;
    let notVisited = 0;

    this.allQuestions.forEach(q => {
      const status = this.responses[q.id].status;
      if (status === 'answered') answered++;
      else if (status === 'not_answered') notAnswered++;
      else if (status === 'marked_review') markedReview++;
      else if (status === 'answered_review') answeredMarked++;
      else notVisited++;
    });

    return {
      total: this.allQuestions.length,
      answered,
      notAnswered,
      markedReview,
      answeredMarked,
      notVisited
    };
  }
}
