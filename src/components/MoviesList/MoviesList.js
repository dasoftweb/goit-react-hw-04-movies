import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './MoviesList.scss';

const MoviesList = ({ movies }) => (
  <ul className="MoviesList">
    {movies.map(({ id, title }) => (
      <li className="MoviesList-item" key={id}>
        <NavLink to={`/movies/${id}`} className="MoviesList-item__link">
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
