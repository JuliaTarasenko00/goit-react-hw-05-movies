import { Link, Outlet } from 'react-router-dom';
import css from './MoviePage.module.css';

const MovieDetailsPage = ({ films, moviesId }) => {
  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = films;

  const url = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

  const backdropUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';

  return (
    <>
      <section
        className={css.movies_card}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url(${backdropUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          className={css.movies_card_img}
          src={url}
          alt={original_title}
          width="300"
          loading="lazy"
        />
        <div className={css.movies_card_list} key={moviesId}>
          <p className={css.movies_card_title}>
            {original_title} ({release_date?.split('-')[0]})
          </p>
          <p className={css.movies_card_renting}>
            {vote_average === 0
              ? 'NR'
              : `${Math.floor((vote_average * 100) / 10)}%`}
          </p>
          <p className={css.movies_card_overview}>{overview}</p>
          <p className={css.movies_card_genre}>
            {genres?.map(genre => genre.name).join(', ')}
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
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
