import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmReviews } from '../Api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) return;
    const fetchFilmReviews = async () => {
      const review = await getFilmReviews(moviesId);
      setReviews(review.results);
    };
    fetchFilmReviews();
  }, [moviesId]);

  return (
    <div className={css.reviews}>
      {reviews.length === 0 && (
        <p className={css.reviews_content}>
          We don't have any reviews for this movie
        </p>
      )}
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li className={css.reviews_item} key={id}>
              <h3 className={css.reviews_name}>Author: {author}</h3>
              <p className={css.reviews_content}>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
