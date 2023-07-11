import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={css.navigation}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={css.navigation}
              style={({ isActive }) => {
                return {
                  color: isActive ? 'red' : 'black',
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
