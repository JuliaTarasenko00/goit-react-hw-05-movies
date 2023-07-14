import { useEffect, useState } from 'react';
import { getFilms } from '../Api';
import css from './Home.module.css';

import MoviesList from 'page/MoviesList/MoviesList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      const film = await getFilms();
      setFilms(film.results);
    };

    fetchFilm();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending Today :</h1>
      <MoviesList filmsList={films} />
    </>
  );
};

export default Home;
