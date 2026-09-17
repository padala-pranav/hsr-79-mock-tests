// Sushruta Storage & Persistence Manager
const STORAGE_KEYS = {
  ATTEMPTS: 'sushruta_test_attempts_v1'
};

export const StorageManager = {
  getAttempts() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load attempts from storage', e);
      return [];
    }
  },

  saveAttempt(attemptData) {
    try {
      const attempts = this.getAttempts();
      attempts.unshift(attemptData);
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
      return true;
    } catch (e) {
      console.error('Failed to save attempt', e);
      return false;
    }
  },

  getAttemptsForTest(testId) {
    return this.getAttempts().filter(a => a.testId === testId);
  },

  getBestAttempt(testId) {
    const attempts = this.getAttemptsForTest(testId);
    if (!attempts.length) return null;
    return attempts.reduce((best, cur) => (cur.score > best.score ? cur : best), attempts[0]);
  },

  clearHistory() {
    localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
  }
};
