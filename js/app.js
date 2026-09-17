import { MOCK_TESTS_DATA } from './data/mockData.js';
import { ExamSession } from './examEngine.js';
import { AnalyticsEngine } from './analyticsEngine.js';
import { StorageManager } from './storage.js';

let currentTab = 'full';
let activeSession = null;
let currentViewingResult = null;

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderTestCards();
  renderRecentProgressBanner();
});

function setupEventListeners() {
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.tab;
      switchTab(tab);
    });
  });

  document.getElementById('btn-view-history')?.addEventListener('click', showHistoryModal);
  document.getElementById('btn-open-linear')?.addEventListener('click', showLinearModal);
  document.getElementById('btn-copy-linear')?.addEventListener('click', copyLinearContent);

  document.getElementById('btn-toggle-frame')?.addEventListener('click', () => {
    const frame = document.getElementById('app-frame-container');
    const isMobileMode = frame.classList.toggle('mobile-device-frame');
    const icon = document.getElementById('frame-toggle-icon');
    if (isMobileMode) {
      icon.innerHTML = '<i class="fa-solid fa-mobile-screen"></i>';
      document.getElementById('frame-toggle-text').innerText = "Desktop Full View";
    } else {
      icon.innerHTML = '<i class="fa-solid fa-desktop"></i>';
      document.getElementById('frame-toggle-text').innerText = "Mobile Frame View";
    }
  });
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('[data-tab]').forEach(btn => {
    if (btn.dataset.tab === tab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const titles = {
    full: {
      title: "NEET Full-Length Mock Tests",
      sub: "Simulate the real exam and track your performance."
    },
    chapter: {
      title: "High-Yield Chapter Tests",
      sub: "Strengthen weak concepts chapter by chapter."
    },
    subject: {
      title: "Subject-Wise Mastery Tests",
      sub: "Dedicated simulations for Physics, Chemistry & Biology."
    }
  };

  document.getElementById('section-title').innerText = titles[tab].title;
  document.getElementById('section-subtitle').innerText = titles[tab].sub;

  renderTestCards();
}

function renderTestCards() {
  const container = document.getElementById('test-cards-list');
  container.innerHTML = '';

  let tests = [];
  if (currentTab === 'full') tests = MOCK_TESTS_DATA.fullTests;
  else if (currentTab === 'chapter') tests = MOCK_TESTS_DATA.chapterTests;
  else if (currentTab === 'subject') tests = MOCK_TESTS_DATA.subjectTests;

  tests.forEach((test, index) => {
    const bestAttempt = StorageManager.getBestAttempt(test.id);
    const card = document.createElement('div');
    card.className = "test-card flex items-center justify-between group";
    
    const iconColors = [
      'bg-emerald-50 text-emerald-600 border-emerald-200',
      'bg-blue-50 text-blue-600 border-blue-200',
      'bg-amber-50 text-amber-600 border-amber-200',
      'bg-purple-50 text-purple-600 border-purple-200',
      'bg-teal-50 text-teal-600 border-teal-200'
    ];
    const colorClass = iconColors[index % iconColors.length];

    card.innerHTML = `
      <div class="flex items-center gap-3.5">
        <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl border ${colorClass}">
          <i class="fa-solid fa-file-lines"></i>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-gray-900 text-base group-hover:text-emerald-700 transition">${test.title}</h3>
            ${bestAttempt ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Best: ${bestAttempt.score}/${bestAttempt.maxScore}</span>` : ''}
          </div>
          <p class="text-xs text-gray-500 mb-1.5">${test.subtitle}</p>
          <div class="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
            <span class="flex items-center gap-1"><i class="fa-regular fa-clock text-gray-400"></i> ${test.durationMinutes >= 60 ? (test.durationMinutes / 60) + ' Hours' : test.durationMinutes + ' Mins'}</span>
            <span class="flex items-center gap-1"><i class="fa-regular fa-file text-gray-400"></i> ${test.totalQuestions} Questions</span>
            <span class="flex items-center gap-1"><i class="fa-solid fa-chart-simple ${test.difficulty === 'Difficult' ? 'text-rose-500' : 'text-emerald-500'}"></i> ${test.difficulty}</span>
          </div>
        </div>
      </div>
      <div class="text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all">
        <i class="fa-solid fa-chevron-right text-sm"></i>
      </div>
    `;

    card.addEventListener('click', () => openTestDetailsModal(test));
    container.appendChild(card);
  });
}

function openTestDetailsModal(test) {
  const modal = document.getElementById('test-details-modal');
  document.getElementById('modal-test-title').innerText = test.title;
  document.getElementById('modal-test-subtitle').innerText = test.subtitle;
  document.getElementById('modal-test-desc').innerText = test.description;
  document.getElementById('modal-test-duration').innerText = `${test.durationMinutes} Minutes`;
  document.getElementById('modal-test-questions').innerText = `${test.totalQuestions} Questions`;
  document.getElementById('modal-test-score').innerText = `${test.maxScore} Marks`;
  document.getElementById('modal-test-marking').innerText = "+4 for Correct, -1 for Incorrect, 0 for Unattempted";
  
  const attempts = StorageManager.getAttemptsForTest(test.id);
  const historyBox = document.getElementById('modal-test-past-attempts');
  if (attempts.length > 0) {
    historyBox.classList.remove('hidden');
    historyBox.innerHTML = `
      <h4 class="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Past Attempts (${attempts.length})</h4>
      <div class="space-y-1.5 max-h-32 overflow-y-auto">
        ${attempts.map(a => `
          <div class="flex items-center justify-between text-xs bg-gray-50 p-2 rounded-lg border border-gray-200">
            <span class="text-gray-600">${new Date(a.timestamp).toLocaleDateString()}</span>
            <span class="font-bold text-emerald-700">${a.score}/${a.maxScore} (${a.accuracy}% Acc)</span>
            <span class="text-xs font-medium text-gray-500">${a.predictedAir}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    historyBox.classList.add('hidden');
  }

  const startBtn = document.getElementById('btn-start-test-session');
  startBtn.onclick = () => {
    closeModal('test-details-modal');
    startExam(test);
  };

  modal.classList.remove('hidden');
}

window.closeModal = function(modalId) {
  document.getElementById(modalId)?.classList.add('hidden');
};

function startExam(test) {
  activeSession = new ExamSession(
    test,
    (timeRemaining, totalDuration) => updateTimerDisplay(timeRemaining),
    () => handleExamTimeout()
  );

  document.getElementById('home-screen-view').classList.add('hidden');
  document.getElementById('results-view').classList.add('hidden');
  document.getElementById('exam-cbt-view').classList.remove('hidden');

  document.getElementById('cbt-exam-title').innerText = test.title;
  renderSectionPills();
  renderQuestionPalette();
  loadCurrentQuestion();
  activeSession.startTimer();
}

function updateTimerDisplay(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const timerElem = document.getElementById('cbt-timer');
  timerElem.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  if (seconds < 300) {
    timerElem.classList.add('text-rose-600', 'animate-pulse');
  } else {
    timerElem.classList.remove('text-rose-600', 'animate-pulse');
  }
}

function renderSectionPills() {
  const container = document.getElementById('cbt-section-tabs');
  container.innerHTML = '';
  
  activeSession.test.sections.forEach(sec => {
    const btn = document.createElement('button');
    btn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold border transition " + 
      (activeSession.getCurrentQuestion()?.sectionId === sec.id 
        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm" 
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50");
    btn.innerText = sec.name;
    btn.onclick = () => {
      const targetQIndex = activeSession.allQuestions.findIndex(q => q.sectionId === sec.id);
      if (targetQIndex !== -1) {
        activeSession.goToQuestion(targetQIndex);
        loadCurrentQuestion();
        renderSectionPills();
        renderQuestionPalette();
      }
    };
    container.appendChild(btn);
  });
}

function renderQuestionPalette() {
  const container = document.getElementById('cbt-palette-grid');
  container.innerHTML = '';

  activeSession.allQuestions.forEach((q, idx) => {
    const resp = activeSession.responses[q.id];
    const btn = document.createElement('div');
    btn.className = `cbt-palette-item ${idx === activeSession.currentIndex ? 'current' : ''}`;
    btn.innerText = idx + 1;

    if (resp.status === 'answered') btn.classList.add('cbt-answered');
    else if (resp.status === 'not_answered') btn.classList.add('cbt-not-answered');
    else if (resp.status === 'marked_review') btn.classList.add('cbt-marked-review');
    else if (resp.status === 'answered_review') btn.classList.add('cbt-answered-marked');
    else btn.classList.add('cbt-not-visited');

    btn.onclick = () => {
      activeSession.goToQuestion(idx);
      loadCurrentQuestion();
      renderQuestionPalette();
      renderSectionPills();
    };

    container.appendChild(btn);
  });

  const summary = activeSession.getSummaryCounts();
  document.getElementById('cnt-answered').innerText = summary.answered;
  document.getElementById('cnt-not-answered').innerText = summary.notAnswered;
  document.getElementById('cnt-marked-review').innerText = summary.markedReview;
  document.getElementById('cnt-answered-review').innerText = summary.answeredMarked;
  document.getElementById('cnt-not-visited').innerText = summary.notVisited;
}

function loadCurrentQuestion() {
  const q = activeSession.getCurrentQuestion();
  if (!q) return;

  document.getElementById('cbt-q-number').innerText = `Question ${activeSession.currentIndex + 1} of ${activeSession.allQuestions.length}`;
  document.getElementById('cbt-q-subject').innerText = q.subject || "NEET UG";
  document.getElementById('cbt-q-chapter').innerText = q.chapter || "";
  document.getElementById('cbt-q-marks').innerText = "+4, -1";

  const questionTextElem = document.getElementById('cbt-q-text');
  questionTextElem.innerText = q.text;

  const optionsContainer = document.getElementById('cbt-options-list');
  optionsContainer.innerHTML = '';

  const resp = activeSession.responses[q.id];

  q.options.forEach((optText, optIdx) => {
    const optCard = document.createElement('div');
    const isSelected = resp.selectedOption === optIdx;
    optCard.className = `quiz-option-card flex items-start gap-3 ${isSelected ? 'selected' : ''}`;
    
    const optionLetter = String.fromCharCode(65 + optIdx);
    optCard.innerHTML = `
      <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isSelected ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'}">
        ${optionLetter}
      </div>
      <div class="text-sm text-gray-800 flex-1 pt-0.5">${optText}</div>
    `;

    optCard.onclick = () => {
      activeSession.selectOption(optIdx);
      loadCurrentQuestion();
      renderQuestionPalette();
    };

    optionsContainer.appendChild(optCard);
  });

  document.getElementById('btn-clear-response').onclick = () => {
    activeSession.clearResponse();
    loadCurrentQuestion();
    renderQuestionPalette();
  };

  document.getElementById('btn-mark-review').onclick = () => {
    activeSession.markForReview();
    loadCurrentQuestion();
    renderQuestionPalette();
    renderSectionPills();
  };

  document.getElementById('btn-save-next').onclick = () => {
    activeSession.saveAndNext();
    loadCurrentQuestion();
    renderQuestionPalette();
    renderSectionPills();
  };

  document.getElementById('btn-submit-exam').onclick = promptSubmitExam;
}

function promptSubmitExam() {
  const summary = activeSession.getSummaryCounts();
  document.getElementById('submit-modal-answered').innerText = summary.answered + summary.answeredMarked;
  document.getElementById('submit-modal-unattempted').innerText = summary.notAnswered + summary.notVisited + summary.markedReview;
  document.getElementById('submit-modal-marked').innerText = summary.markedReview + summary.answeredMarked;
  
  document.getElementById('submit-confirm-modal').classList.remove('hidden');
  document.getElementById('btn-confirm-submit-exam').onclick = () => {
    closeModal('submit-confirm-modal');
    finalizeExamSubmission();
  };
}

function handleExamTimeout() {
  alert("Time is up! Your test is being automatically submitted.");
  finalizeExamSubmission();
}

function finalizeExamSubmission() {
  activeSession.stopTimer();
  const scorecard = AnalyticsEngine.calculateScorecard(
    activeSession.test,
    activeSession.responses,
    activeSession.timeSpent
  );

  StorageManager.saveAttempt(scorecard);
  showResultsView(scorecard, activeSession.allQuestions, activeSession.responses);
}

function showResultsView(scorecard, questions, responses) {
  currentViewingResult = { scorecard, questions, responses };

  document.getElementById('exam-cbt-view').classList.add('hidden');
  document.getElementById('home-screen-view').classList.add('hidden');
  document.getElementById('results-view').classList.remove('hidden');

  document.getElementById('res-test-title').innerText = scorecard.testTitle;
  document.getElementById('res-total-score').innerText = `${scorecard.score}`;
  document.getElementById('res-max-score').innerText = `/${scorecard.maxScore}`;
  document.getElementById('res-predicted-air').innerText = scorecard.predictedAir;
  document.getElementById('res-percentile').innerText = `${scorecard.percentile}%`;
  document.getElementById('res-accuracy').innerText = `${scorecard.accuracy}%`;
  document.getElementById('res-time-taken').innerText = `${Math.floor(scorecard.timeSpentSeconds / 60)}m ${scorecard.timeSpentSeconds % 60}s`;

  const cutoff = scorecard.collegeEligibility;
  const cutoffElem = document.getElementById('res-cutoff-box');
  cutoffElem.className = `p-4 rounded-2xl border text-sm flex items-start gap-3 bg-${cutoff.color}-50 border-${cutoff.color}-200 text-${cutoff.color}-900`;
  cutoffElem.innerHTML = `
    <div class="text-2xl"><i class="fa-solid fa-graduation-cap text-${cutoff.color}-600"></i></div>
    <div>
      <div class="font-bold text-base text-${cutoff.color}-800">${cutoff.badge} — ${cutoff.status}</div>
      <p class="text-xs text-${cutoff.color}-700 mt-0.5">${cutoff.description}</p>
    </div>
  `;

  document.getElementById('res-cnt-correct').innerText = scorecard.correct;
  document.getElementById('res-cnt-incorrect').innerText = scorecard.incorrect;
  document.getElementById('res-cnt-unattempted').innerText = scorecard.unattempted;

  renderSubjectBreakdown(scorecard.subjectBreakdown);
  renderSolutionsList(questions, responses, 'all');

  document.getElementById('btn-reattempt-test').onclick = () => {
    const test = MOCK_TESTS_DATA.fullTests.find(t => t.id === scorecard.testId) ||
                 MOCK_TESTS_DATA.chapterTests.find(t => t.id === scorecard.testId) ||
                 MOCK_TESTS_DATA.subjectTests.find(t => t.id === scorecard.testId);
    if (test) startExam(test);
  };

  document.getElementById('btn-back-home-from-results').onclick = () => {
    document.getElementById('results-view').classList.add('hidden');
    document.getElementById('home-screen-view').classList.remove('hidden');
    renderTestCards();
    renderRecentProgressBanner();
  };

  document.querySelectorAll('[data-sol-filter]').forEach(btn => {
    btn.onclick = (e) => {
      document.querySelectorAll('[data-sol-filter]').forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
      e.currentTarget.classList.add('active', 'bg-emerald-600', 'text-white');
      renderSolutionsList(questions, responses, e.currentTarget.dataset.solFilter);
    };
  });
}

function renderSubjectBreakdown(breakdowns) {
  const container = document.getElementById('res-subject-breakdown-list');
  container.innerHTML = '';

  breakdowns.forEach(sub => {
    const percentage = sub.maxScore > 0 ? Math.round((Math.max(0, sub.score) / sub.maxScore) * 100) : 0;
    const item = document.createElement('div');
    item.className = "bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm";
    item.innerHTML = `
      <div class="flex items-center justify-between text-xs font-bold mb-1.5">
        <span class="text-gray-800">${sub.subject}</span>
        <span class="text-emerald-700">${sub.score}/${sub.maxScore} (${percentage}%)</span>
      </div>
      <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2">
        <div class="bg-emerald-500 h-full rounded-full" style="width: ${percentage}%"></div>
      </div>
      <div class="flex items-center justify-between text-[11px] text-gray-500">
        <span>Correct: <strong class="text-emerald-600">${sub.correct}</strong></span>
        <span>Incorrect: <strong class="text-rose-600">${sub.incorrect}</strong></span>
        <span>Skipped: <strong>${sub.unattempted}</strong></span>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderSolutionsList(questions, responses, filter) {
  const container = document.getElementById('res-solutions-list');
  container.innerHTML = '';

  let filtered = questions.filter(q => {
    const resp = responses[q.id];
    const isAttempted = resp && resp.selectedOption !== null;
    const isCorrect = isAttempted && resp.selectedOption === q.correctAnswer;
    
    if (filter === 'incorrect') return isAttempted && !isCorrect;
    if (filter === 'unattempted') return !isAttempted;
    if (filter === 'correct') return isCorrect;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="text-center py-8 text-sm text-gray-500">No questions match the selected filter.</div>`;
    return;
  }

  filtered.forEach(q => {
    const resp = responses[q.id];
    const userSelected = resp ? resp.selectedOption : null;
    const isCorrect = userSelected === q.correctAnswer;
    const isSkipped = userSelected === null || userSelected === undefined;

    const card = document.createElement('div');
    card.className = "p-4 rounded-xl border bg-white mb-3 shadow-sm";
    
    let statusBadge = '';
    if (isCorrect) {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300"><i class="fa-solid fa-check mr-1"></i> Correct (+4)</span>';
    } else if (isSkipped) {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-gray-100 text-gray-700 border border-gray-300"><i class="fa-solid fa-minus mr-1"></i> Skipped (0)</span>';
    } else {
      statusBadge = '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-300"><i class="fa-solid fa-xmark mr-1"></i> Incorrect (-1)</span>';
    }

    card.innerHTML = `
      <div class="flex items-center justify-between mb-2 pb-2 border-b border-gray-100">
        <div class="text-xs font-bold text-gray-600">Q${q.globalIndex + 1} &bull; ${q.subject} (${q.chapter})</div>
        ${statusBadge}
      </div>
      <div class="text-sm font-medium text-gray-900 mb-3">${q.text}</div>
      <div class="space-y-1.5 mb-3">
        ${q.options.map((opt, i) => {
          let optStyle = "bg-gray-50 border-gray-200 text-gray-700";
          let label = String.fromCharCode(65 + i);
          let extra = "";

          if (i === q.correctAnswer) {
            optStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold";
            extra = ' <span class="text-[11px] text-emerald-700 font-bold ml-1">(Correct Answer)</span>';
          }
          if (userSelected === i && !isCorrect) {
            optStyle = "bg-rose-50 border-rose-400 text-rose-900 font-semibold";
            extra = ' <span class="text-[11px] text-rose-700 font-bold ml-1">(Your Choice)</span>';
          }

          return `
            <div class="text-xs p-2.5 rounded-lg border flex items-center justify-between ${optStyle}">
              <span><strong>${label}.</strong> ${opt}</span>
              ${extra}
            </div>
          `;
        }).join('')}
      </div>
      <div class="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 text-xs">
        <div class="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
          <i class="fa-solid fa-lightbulb text-amber-500"></i> Step-by-Step NCERT Explanation:
        </div>
        <div class="text-emerald-950 whitespace-pre-line leading-relaxed mb-2">${q.explanation}</div>
        <div class="text-[11px] text-emerald-800 font-medium flex items-center gap-1">
          <i class="fa-solid fa-book-bookmark"></i> ${q.ncertReference}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderRecentProgressBanner() {
  const attempts = StorageManager.getAttempts();
  const banner = document.getElementById('progress-banner-container');
  if (!banner) return;

  if (attempts.length === 0) {
    banner.innerHTML = `
      <div class="progress-banner-gold p-4 rounded-2xl flex items-center gap-3.5 shadow-sm">
        <div class="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-600 flex items-center justify-center text-xl shrink-0">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <div>
          <h4 class="font-bold text-amber-950 text-sm">Track Your Progress</h4>
          <p class="text-xs text-amber-800/80">Take tests regularly to improve your score and move closer to your dream.</p>
        </div>
      </div>
    `;
  } else {
    const latest = attempts[0];
    banner.innerHTML = `
      <div class="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-4 rounded-2xl flex items-center justify-between shadow-md">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl text-emerald-300">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <div>
            <div class="text-[11px] text-emerald-200 font-medium uppercase tracking-wider">Latest Score</div>
            <div class="font-bold text-base text-white">${latest.score}/${latest.maxScore} <span class="text-xs font-normal text-emerald-200">(${latest.predictedAir})</span></div>
          </div>
        </div>
        <button id="btn-reopen-latest" class="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold transition">
          View Analysis
        </button>
      </div>
    `;

    document.getElementById('btn-reopen-latest')?.addEventListener('click', () => {
      showResultsView(latest, [], {});
    });
  }
}

function showHistoryModal() {
  const modal = document.getElementById('history-modal');
  const attempts = StorageManager.getAttempts();
  const list = document.getElementById('history-items-list');

  if (attempts.length === 0) {
    list.innerHTML = `<div class="text-center py-12 text-sm text-gray-500">No mock tests attempted yet. Start a test to see your history!</div>`;
  } else {
    list.innerHTML = attempts.map(a => `
      <div class="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
        <div>
          <div class="font-bold text-gray-900 text-sm">${a.testTitle}</div>
          <div class="text-xs text-gray-500">${new Date(a.timestamp).toLocaleString()} &bull; ${Math.floor(a.timeSpentSeconds / 60)} mins</div>
          <div class="text-xs font-semibold text-emerald-700 mt-1">${a.predictedAir} &bull; ${a.percentile} Percentile</div>
        </div>
        <div class="text-right">
          <div class="text-lg font-black text-emerald-800">${a.score}<span class="text-xs font-normal text-gray-500">/${a.maxScore}</span></div>
          <div class="text-[11px] font-medium text-gray-600">${a.accuracy}% Accuracy</div>
        </div>
      </div>
    `).join('');
  }

  modal.classList.remove('hidden');
}

function showLinearModal() {
  document.getElementById('linear-tickets-modal').classList.remove('hidden');
}

function copyLinearContent() {
  const content = document.getElementById('linear-content-preview').innerText;
  navigator.clipboard.writeText(content).then(() => {
    alert("Linear tickets copied to clipboard!");
  });
}
