import axios from 'axios';

export default {
  get(endpoint) {
    return axios.get(endpoint, { headers: { 'trakt-api-key': 'ba7c78f4d23246ba1be0a33acaa74b6d91cd805b0bc35623612bad99e0bf8f31' } });
  }
}