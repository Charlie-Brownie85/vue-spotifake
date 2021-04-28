import qs from 'qs';

const { VUE_APP_SEARCH_ENDPOINT } = process.env;

const state = {
  results: {},
  searchStatus: 'DONE',
};

const mutations = {
  'SET_SEARCH_RESULTS'(state, payload) {
    state.results = JSON.parse(JSON.stringify(payload));
  },
  'SET_SEARCH_STATUS'(state, payload) {
    state.searchStatus = payload;
  },
  'CLEAR_SEARCH_RESULTS'(state) {
    state.results = {};
  }
};

const actions = {
  async search({ commit }, query) {
    try {
      commit('SET_SEARCH_STATUS', 'SEARCHING');
      const res = await this._vm.$http.get(VUE_APP_SEARCH_ENDPOINT, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: {
          q: query.searchTerm,
          type: query.type.join(','),
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
  albumResults: (state) => state.results?.albums?.items || [],
  artistResults: (state) => state.results?.artists?.items || [],
  trackResults: (state) => state.results?.tracks?.items || [],
};

export default {
  state,
  mutations,
  actions,
  getters,
};
