import css from './Forms.module.css';

const FormMovies = ({ setSearchParams }) => {
  const onSubmitInput = ev => {
    ev.preventDefault();
    const value = ev.target.search.value;
    setSearchParams({
      query: value,
    });
  };

  return (
    <form className={css.movie_form} onSubmit={onSubmitInput}>
      <div className={css.movie_wrap}>
        <input className={css.movie_input} type="text" name="search" required />
        <button className={css.movie_btn} type="submit">
          &#128269;
        </button>
      </div>
    </form>
  );
};
export default FormMovies;
