import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <nav className={css.navigation}>
        <ul className={css.navigation_list}>
          <li>
            <NavLink
              to="/"
              className={css.navigation_link}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'tomato' : 'white',
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={css.navigation_link}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'tomato' : 'white',
                };
              }}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
