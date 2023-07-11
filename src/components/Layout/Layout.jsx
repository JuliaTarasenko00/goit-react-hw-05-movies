import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

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
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
