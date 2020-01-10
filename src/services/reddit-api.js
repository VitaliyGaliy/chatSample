import Config from 'react-native-config';
import axios from 'axios';
import applyConverters from 'axios-case-converter';

const api = applyConverters(axios.create({
  baseURL: Config.API_BASE_URL,
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}
));

export const getPopularFeed = () => api.get('/r/popular.json?limit=10');
export const getNextPopularFeed = (after) => api.get(`/r/popular.json?limit=10&after=${after}&count=10`);
