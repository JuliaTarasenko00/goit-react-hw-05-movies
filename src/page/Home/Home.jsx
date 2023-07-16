import { useEffect, useState } from 'react';
import { getFilms } from '../../components/Api';
import css from './Home.module.css';

import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

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
      <MoviesList filmsList={films} location={location} />
    </>
  );
};

export default Home;
