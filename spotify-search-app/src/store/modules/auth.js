import * as utils from '../../utils/functions';

const {
  VUE_APP_CLIENT_ID,
  VUE_APP_AUTHORIZE_URL,
  VUE_APP_REDIRECT_URI
} = process.env;

const state = {
  status: '',
  token: localStorage.getItem('spotify-access-token') || '',
  tokenExpirationTime: ''
};

const mutations = {
  'AUTH_REQUEST'(state){
    state.status = 'loading';
  },
  'AUTH_SUCCESS'(state, payload){
    state.status = 'logged';
    state.token = payload.token;
    state.tokenExpirationTime = payload.expirationTime;
    localStorage.setItem('spotify-access-token', payload.token);
    localStorage.setItem('tokenExpirationTime', payload.expirationTime);
    utils.setAuthHeader();
  },
  'AUTH_ERROR'(state){
    state.status = 'error';
  },
  'LOGOUT'(state){
    state.status = '';
    state.token = '';
    state.tokenExpirationTime = '';
  },
};

const actions = {
  requestAuth: ({ commit }) => {
    return new Promise((resolve) => {
      commit('AUTH_REQUEST');
      window.location = `${VUE_APP_AUTHORIZE_URL}?client_id=${VUE_APP_CLIENT_ID}&redirect_uri=${VUE_APP_REDIRECT_URI}&response_type=token`;
      resolve();
    })
  },
  manageSuccessfulAuth: ({ commit }, hash) => {
    return new Promise((resolve) => {
      const { access_token: token, expires_in } = utils.getTokenParams(hash);
      const tokenPayload = { token, expirationTime: utils.getExpirationTime(expires_in) };
      commit('AUTH_SUCCESS', tokenPayload);
      resolve();
    })
  },
  manageFailedAuth: ({ commit }) => {
    commit('AUTH_ERROR');
  }
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

export default {
  state,
  mutations,
  actions,
  getters
};