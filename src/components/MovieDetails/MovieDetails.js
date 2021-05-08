import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './MovieDetails.scss';

const Cast = lazy(() =>
  import('../../views/Cast' /* webpackChunkName: "Cast" */),
);

const Reviews = lazy(() =>
  import('../../views/Reviews' /* webpackChunkName: "Reviews" */),
);

const MovieDetails = ({
  release_date,
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  match,
}) => (
  <>
    <div className="MovieDetails">
      <div className="MovieDetails__poster">
        <img className="MovieDetails__img" src={poster_path} alt={title}></img>
      </div>

      <div className="MovieDetails__desc">
        <h1>
          {title} ({release_date})
        </h1>
        <p>User Score: {vote_average}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres ? (
          <ul className="Genres-list">
            {genres.map(ganre => (
              <li className="Genres-list__item" key={ganre.id}>
                # {ganre.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
    <div className="additional">
      <h3 className="additional-title">Additional information</h3>
      <ul className="additional-list">
        <li className="additional-list__item">
          <NavLink
            to={`${match.url}/cast`}
            className="additional-list__link"
            activeClassName="additional-list__active"
          >
            Cast
          </NavLink>
        </li>
        <li className="additional-list__item">
          <NavLink
            to={`${match.url}/reviews`}
            className="additional-list__link"
            activeClassName="additional-list__active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Route path={`${match.path}/cast`} component={Cast}></Route>
        <Route path={`${match.path}/reviews`} component={Reviews}></Route>
      </Suspense>
    </div>
  </>
);

MovieDetails.propTypes = {
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
