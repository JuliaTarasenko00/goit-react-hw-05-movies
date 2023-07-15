import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setToTop(true) : setToTop(false);
    });
  }, []);

  const onscroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {toTop && (
        <button
          style={{
            color: 'white',
            fontSize: '50px',
            background: 'transparent',
            borderRadius: '20%',
            border: '2px solid tomato',
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            cursor: 'pointer',
          }}
          onClick={onscroll}
        >
          &#129093;
        </button>
      )}
    </>
  );
};

export default BackToTop;
