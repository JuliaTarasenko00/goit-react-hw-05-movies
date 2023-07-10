import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { moviesId } = useParams();
  console.log('moviesId: ', moviesId);

  return <p>Reviews: {moviesId}</p>;
};

export default Reviews;
