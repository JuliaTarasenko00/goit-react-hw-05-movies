import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsCast } from '../Api';
import css from './Cast.module.css';
import ImgCart from 'components/ImgCart';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!moviesId) return;
    const fetchFilmCast = async () => {
      const cast = await getFilmsCast(moviesId);
      setCast(cast.cast);
    };
    fetchFilmCast();
  }, [moviesId]);

  return (
    <div className={css.cart}>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {cast.map(({ original_name, profile_path, id, character }) => {
          return (
            <SwiperSlide key={id} className={css.movies_cast_item}>
              <div className={css.wrap}>
                <img
                  className={css.movies_cast_img}
                  src={ImgCart(profile_path)}
                  alt={original_name}
                  width="200"
                />
                <h4 className={css.movies_cast_name}>{original_name}</h4>
                <p className={css.movies_cast_name}>Character: {character}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Cast;
