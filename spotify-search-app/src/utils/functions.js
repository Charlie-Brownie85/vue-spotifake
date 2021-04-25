import axios from 'axios';

export const getTokenParams = hashString => {
  return hashString.slice(1)
  .split('&')
  .reduce((prev, curr) => {
    const [title, value] = curr.split('=');
    prev[title] = value;
    return prev;
  }, {});
};

export const setAuthHeader = () => {
  try {
    const token = localStorage.getItem('spotify-access-token');
    if (token) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const getExpirationTime = expires_in => new Date().getTime() + parseInt(expires_in) * 1000;