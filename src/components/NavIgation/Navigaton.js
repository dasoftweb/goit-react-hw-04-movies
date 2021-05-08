import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <NavLink exact={true} to={routes.home} className="Logo">
        MovieDB
      </NavLink>

      <nav className="Navigation">
        <NavLink
          exact={true}
          to={routes.home}
          className="Navigation-link"
          activeClassName="active"
        >
          Home
        </NavLink>

        <NavLink
          to={routes.movies}
          className="Navigation-link"
          activeClassName="active"
        >
          Movies
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
