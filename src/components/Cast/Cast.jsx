import { useParams } from 'react-router-dom';

const Cast = () => {
  const { moviesId } = useParams();
  console.log('moviesId: ', moviesId);

  return (
    <p style={{ color: 'white', marginBottom: '30px' }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero asperiores
      expedita sunt dolorum sequi eveniet velit omnis natus, illum deserunt
      voluptatum harum dicta deleniti saepe, incidunt corrupti eum quod
      maiores.You need to enable JavaScript to run this app.Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Vero asperiores expedita sunt
      dolorum sequi eveniet velit omnis natus, illum deserunt voluptatum harum
      dicta deleniti saepe, incidunt corrupti eum quod maiores.You need to
      enable JavaScript to run this app.Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Vero asperiores expedita sunt dolorum sequi eveniet
      velit omnis natus, illum deserunt voluptatum harum dicta deleniti saepe,
      incidunt corrupti eum quod maiores.You need to enable JavaScript to run
      this app. Cast: {moviesId}
    </p>
  );
};

export default Cast;
