import PropTypes from 'prop-types';

const ImgCart = img => {
  const image = img
    ? `https://image.tmdb.org/t/p/original${img}`
    : 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
  return image;
};

export default ImgCart;

ImgCart.propTypes = {
  img: PropTypes.string.isRequired,
};
