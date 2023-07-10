import { useParams } from 'react-router-dom';

const Cast = () => {
  const { moviesId } = useParams();

  return <p>Cast: {moviesId}</p>;
};

export default Cast;
