import { Link } from 'react-router-dom';

const Movies = ({ filmsList }) => {
  return (
    <>
      <ul>
        {filmsList?.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
