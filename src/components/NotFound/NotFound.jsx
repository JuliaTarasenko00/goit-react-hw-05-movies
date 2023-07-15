import ErrorNotFound from 'imgError/ErrorNotFound.png';

const NotFound = () => {
  return (
    <img
      style={{ margin: 'auto', marginTop: '50px' }}
      src={ErrorNotFound}
      alt="Error"
      width="500"
      loading="lazy"
    />
  );
};

export default NotFound;
