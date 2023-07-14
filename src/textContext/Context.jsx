import { createContext, useState } from 'react';

const ContextFilm = createContext();

const Context = ({ children }) => {
  const [films, setFilms] = useState([]);
  <ContextFilm.Provider value={{ films, setFilms }}>
    {children}
  </ContextFilm.Provider>;
};

export default Context;
