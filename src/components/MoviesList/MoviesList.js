import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { normalizePosterPath } from '../../components/FetchNormalizer';
import './MoviesList.scss';

const MoviesList = ({ movies, location }) => (
  <ul className="MoviesList">
    {movies.map(({ id, poster_path, title }) => (
      <li className="MoviesList-item" key={id}>
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: { from: location },
          }}
          className="MoviesList-item__link"
        >
          <img
            className="MoviesList-img"
            src={normalizePosterPath(poster_path)}
            alt={`${title} poster`}
          />
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default withRouter(MoviesList);
