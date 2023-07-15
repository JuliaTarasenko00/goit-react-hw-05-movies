import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsId } from '../Api';
import MovieDetailsPage from 'page/MovieDetailsPage.jsx/MoviesPage';

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [films, setFilms] = useState({});

  useEffect(() => {
    if (!moviesId) return;
    const fetchFilmList = async () => {
      const film = await getFilmsId(moviesId);
      setFilms(film);
    };
    fetchFilmList();
  }, [moviesId]);

  return <MovieDetailsPage films={films} moviesId={moviesId} />;
};

export default MovieDetails;
