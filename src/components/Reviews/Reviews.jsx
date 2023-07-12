import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmReviews } from '../Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchFilmReviews = async () => {
      const review = await getFilmReviews(moviesId);
      setReviews(review.results);
    };
    fetchFilmReviews();
  }, [moviesId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
