import { logDOM } from '@testing-library/dom';
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
  location,
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
            to={{
              pathname: `${match.url}/cast`,
              state: { ...location.state },
            }}
            className="additional-list__link"
            activeClassName="additional-list__active"
          >
            Cast
          </NavLink>
        </li>
        <li className="additional-list__item">
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: { ...location.state },
            }}
            className="additional-list__link"
            activeClassName="additional-list__active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      {console.log(location)}
      <Suspense fallback={<Loader />}>
        <Route path={`${match.path}/cast`} component={Cast}></Route>
        <Route path={`${match.path}/reviews`} component={Reviews}></Route>
      </Suspense>
    </div>
  </>
);

MovieDetails.propTypes = {
  release_date: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  match: PropTypes.object,
  location: PropTypes.object,
};

export default MovieDetails;
