import { Link } from 'react-router-dom';
import css from './Movies.module.css';
import ImgCart from 'components/ImgCart';

const MoviesList = ({ filmsList }) => {
  return (
    <ul className={css.films_list}>
      {filmsList?.map(({ id, original_title, poster_path }) => {
        return (
          <li key={id} className={css.films_item}>
            <Link to={`/movies/${id}`}>
              <img
                src={ImgCart(poster_path)}
                alt={original_title}
                width="300"
                loading="lazy"
              />
              <p className={css.films_item_title}> {original_title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
