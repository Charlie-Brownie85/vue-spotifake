import qs from 'qs';

const { VUE_APP_SEARCH_ENDPOINT } = process.env;

const state = {
  results: {},
};

const mutations = {
  'SET_SEARCH_RESULTS'(state, payload) {
    state.results = JSON.parse(JSON.stringify(payload));
    console.log(payload);
  },
  'CLEAR_SEARCH_RESULTS'(state) {
    state.results = {};
  }
};

const actions = {
  async search({ commit }, query) {
    try {
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
    } catch (error) {
      console.log('SEARCH ERROR: ' + error);
    }
  },
  clearResults: ({ commit }) => { commit('CLEAR_SEARCH_RESULTS') }
};

const getters = {
  searchResults: (state) => state.results,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
