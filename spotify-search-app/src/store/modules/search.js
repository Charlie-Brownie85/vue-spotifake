import qs from 'qs';

const { VUE_APP_SEARCH_ENDPOINT } = process.env;

const state = {
  results: {},
  searchStatus: 'DONE',
  searchTerm: '',
};

const mutations = {
  'SET_SEARCH_RESULTS'(state, payload) {
    state.results = JSON.parse(JSON.stringify(payload));
  },
  'SET_SEARCH_STATUS'(state, payload) {
    state.searchStatus = payload;
  },
  'SET_SEARCH_TERM'(state, payload) {
    state.searchTerm = payload;
  },
  'CLEAR_SEARCH_RESULTS'(state) {
    state.results = {};
    state.searchTerm = '';
  }
};

const actions = {
  async search({ commit, getters }, query) {
    try {
      commit('SET_SEARCH_STATUS', 'SEARCHING');
      commit('SET_SEARCH_TERM', query.searchTerm);
      const res = await this._vm.$http.get(VUE_APP_SEARCH_ENDPOINT, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: {
          q: getters.searchTerm,
          type: query.type,
          offset: query.offset || 0,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { indices: false });
        },
      });
      commit('SET_SEARCH_RESULTS', res.data);
      commit('SET_SEARCH_STATUS', 'DONE');
    } catch (error) {
      commit('SET_SEARCH_STATUS', 'DONE');
      console.log('SEARCH ERROR: ' + error);
    }
  },
  clearResults: ({ commit }) => { commit('CLEAR_SEARCH_RESULTS') }
};

const getters = {
  searchResults: (state) => state.results,
  searchStatus: (state) => state.searchStatus,
  searchTerm: (state) => state.searchTerm,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
