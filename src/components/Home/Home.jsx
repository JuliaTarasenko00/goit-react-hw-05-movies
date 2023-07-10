import { useEffect, useState } from 'react';
import getFilms from '../Api';
import { Link } from 'react-router-dom';

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
      <ul>
        {films.map(({ id, title, poster_path }) => {
          let url = poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
          return (
            <li key={id}>
              <Link to={`${id}`}>
                <img src={url} alt={title} width="400" />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
