import axios from 'axios';

const API_KEY = '468c2ebbcd20d786d16a982ad3dded4a';
const baseURL = 'https://api.themoviedb.org/3/';

export const getFilms = async () => {
  const { data } = await axios.get(
    `${baseURL}trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getFilmsId = async id => {
  const { data } = await axios.get(
    `${baseURL}/movie/${id}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getFilmsCast = async id => {
  const { data } = await axios.get(
    `${baseURL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getFilmReviews = async id => {
  const { data } = await axios.get(
    `${baseURL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const getFilmSearch = async query => {
  const { data } = await axios.get(
    `${baseURL}search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}&page=1`
  );
  return data;
};
