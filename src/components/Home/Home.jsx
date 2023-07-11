import { useEffect, useState } from 'react';
import { getFilms } from '../Api';
import css from './Home.module.css';

import Movies from 'components/Movies/Movies';

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
      <Movies filmsList={films} />
    </>
  );
};

export default Home;
