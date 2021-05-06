import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'be2bb7fd29eddf6e05cfa10ca2e7b19c';

const getTranding = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};

const getMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};

const getCredits = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
  return response;
};

export default { getTranding, getMovie, getCredits };
