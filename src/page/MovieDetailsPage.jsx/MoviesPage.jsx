import PropTypes from 'prop-types';

import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MoviePage.module.css';
import ImgCart from 'components/ImgCart';
import { Suspense, useRef } from 'react';
import Loader from 'components/Loader';

const MovieDetailsPage = ({ films, moviesId }) => {
  const location = useLocation();
  const backToMovies = useRef(location.state?.from ?? '/movies');

  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = films;

  return (
    <>
      <Link to={backToMovies.current} className={css.movies_back}>
        &#11164; Back to
      </Link>
      <section
        className={css.movies_card}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url(${ImgCart(
            backdrop_path
          )})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          className={css.movies_card_img}
          src={ImgCart(poster_path)}
          alt={original_title}
          width="300"
          loading="lazy"
        />
        <div className={css.movies_card_list} key={moviesId}>
          <p className={css.movies_card_title}>
            {original_title} ({release_date?.split('-')[0]})
          </p>
          <p className={css.movies_card_renting}>
            User Score:{' '}
            {vote_average === 0
              ? 'NR'
              : `${Math.floor((vote_average * 100) / 10)}%`}
          </p>
          <p className={css.movies_card_overview}>Overview{overview}</p>
          <p className={css.movies_card_genre}>
            Genres: {genres?.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </section>
      <p className={css.movies_information}>Additional information</p>
      <ul className={css.movies_detail}>
        <li>
          <Link to="cast" className={css.movies_cast}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={css.movies_reviews}>
            Reviews
          </Link>
        </li>
      </ul>
      <section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  films: PropTypes.object.isRequired,
  moviesId: PropTypes.string.isRequired,
};
