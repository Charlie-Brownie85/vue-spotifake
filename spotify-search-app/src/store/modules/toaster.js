const state = {
  toasterTimer: null,
  displayToaster: false,
};

const getters = {
  toasterTimer: (state) => state.toasterTimer,
  displayToaster: (state) => state.displayToaster,
};

const mutations = {
  'DISPLAY_TOASTER'(state) {
    state.displayToaster = true;
  },
  'HIDE_TOASTER'(state) {
    state.displayToaster = false;
  },
  'SET_TIMER'(state, timer) {
    state.toasterTimer = timer;
  },
  'CLEAR_TIMER'(state) {
    clearTimeout(state.toasterTimer);
    state.toasterTimer = null;
  },
};

const actions = {
  diplayToaster({ commit, getters }) {
    commit('DISPLAY_TOASTER');
    if (getters.toasterTimer !== null) {
      commit('CLEAR_TIMER');
    }

    const timer = setTimeout( () => {
      commit('HIDE_TOASTER');
      commit('CLEAR_TIMER');
    }, 1500);

    commit('SET_TIMER', timer);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};