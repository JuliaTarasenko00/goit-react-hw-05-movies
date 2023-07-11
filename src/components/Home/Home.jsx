import { useEffect, useState } from 'react';
import { getFilms } from '../Api';

import Movies from 'components/Movies/Movies';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      getFilms().then(resFilm => setFilms(resFilm.results));
    };
    fetchFilm();
  }, []);

  return (
    <>
      <Movies filmsList={films} />
    </>
  );
};

export default Home;
