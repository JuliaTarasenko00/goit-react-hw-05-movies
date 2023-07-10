import axios from 'axios';

const API_KEY = '468c2ebbcd20d786d16a982ad3dded4a';
const baseURL = 'https://api.themoviedb.org/3/';

const getFilms = async () => {
  try {
    const { data } = await axios.get(
      `${baseURL}trending/movie/day?language=en-US&api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getFilms;
