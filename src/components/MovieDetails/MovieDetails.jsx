import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  // params.moviesId
  const { moviesId } = useParams();
  console.log('moviesId: ', moviesId);

  return (
    <>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
