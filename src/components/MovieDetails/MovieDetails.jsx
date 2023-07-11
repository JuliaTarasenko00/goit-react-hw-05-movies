import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getFilmsId } from '../Api';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilmList = async () => {
      getFilmsId(moviesId).then(resFilm => setFilms(resFilm));
    };
    fetchFilmList();
  }, [moviesId]);

  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = films;

  let url = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

  return (
    <>
      <div>
        <img src={url} alt={original_title} width="300" />
        <ul>
          <li key={moviesId}>
            <p>{original_title}</p>
            <p>{release_date?.split('-')[0]}</p>
            <p>
              {vote_average === 0 ? 'NR' : `${Math.floor(vote_average * 10)}%`}
            </p>
            <p>{overview}</p>
            <p>{genres?.map(genre => genre.name).join(', ')}</p>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
