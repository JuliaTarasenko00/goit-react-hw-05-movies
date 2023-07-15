import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import css from './Movies.module.css';
import ImgCart from 'components/ImgCart';
import BackToTop from 'page/BackToTop';

const MoviesList = ({ filmsList, location }) => {
  return (
    <>
      <ul className={css.films_list}>
        {filmsList?.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id} className={css.films_item}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
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
      <BackToTop />
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  filmsList: PropTypes.array,
};
