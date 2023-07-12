import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsCast } from '../Api';
import css from './Cast.module.css';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchFilmCast = async () => {
      const cast = await getFilmsCast(moviesId);
      setCast(cast.cast);
    };
    fetchFilmCast();
  }, [moviesId]);

  return (
    <section className={css.movie_cast}>
      <ul className={css.movie_cast_list}>
        {cast.map(({ original_name, profile_path, id }) => {
          const url = profile_path
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
          return (
            <li key={id} className={css.movies_cast_item}>
              <div className={css.wrap}>
                <img
                  className={css.movies_cast_img}
                  src={url}
                  alt={original_name}
                  width="200"
                />
                <h4 className={css.movies_cast_name}>{original_name}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Cast;
