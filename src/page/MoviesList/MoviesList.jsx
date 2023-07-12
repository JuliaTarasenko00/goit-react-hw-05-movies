import { Link } from 'react-router-dom';
import css from './Movies.module.css';

const MoviesList = ({ filmsList }) => {
  return (
    <ul className={css.films_list}>
      {filmsList?.map(({ id, original_title, poster_path }) => {
        let url = poster_path
          ? `https://image.tmdb.org/t/p/original${poster_path}`
          : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
        return (
          <li key={id} className={css.films_item}>
            <Link to={`/movies/${id}`}>
              <img src={url} alt={original_title} width="300" loading="lazy" />
              <p className={css.films_item_title}> {original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
