import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormMovies from 'page/FormMovies/FormsMovies';
import { getFilmSearch } from 'components/Api';
import MoviesList from 'page/MoviesList/MoviesList';
import Loader from 'components/Loader';

const Movies = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  const [isLoader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovies = searchParams.get('query');

  useEffect(() => {
    if (!searchMovies) return;
    const fetchFilmSearch = async () => {
      setLoader(true);
      const searchMovie = await getFilmSearch(searchMovies);
      if (searchMovie.results.length === 0) {
        setLoader(false);
        return toast.error(`Oxxx, film not found ${searchMovies} `);
      }
      setLoader(false);
      setMovie(searchMovie.results);
    };
    fetchFilmSearch();
  }, [searchMovies]);

  return (
    <>
      <FormMovies setSearchParams={setSearchParams} />
      {movie.length === 0 && (
        <p
          style={{
            color: 'white',
            fontWeight: '900',
            fontSize: '50px',
            marginTop: '10%',
            textAlign: 'center',
          }}
        >
          Your movies will be here{' '}
          <span style={{ color: 'red' }}>&#10084;</span>
        </p>
      )}
      {movie && <MoviesList filmsList={movie} location={location} />}
      {isLoader && <Loader />}
      <ToastContainer theme="colored" />
    </>
  );
};

export default Movies;
