import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <ul>
        {['films1', 'films2', 'films3', 'films4'].map(film => {
          return (
            <li key={film}>
              <Link to={`${film}`}>{film}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
