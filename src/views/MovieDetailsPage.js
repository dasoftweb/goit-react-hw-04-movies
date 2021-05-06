import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { getMovieById } from '../services/movies-api';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import {
  normalizePosterPath,
  normalizeDate,
  normalizeScore,
} from '../components/FetchNormalizer';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await getMovieById(movieId);
    const { poster_path, release_date, vote_average } = response.data;
    this.setState({
      movie: {
        ...response.data,
        poster_path: normalizePosterPath(poster_path),
        release_date: normalizeDate(release_date),
        vote_average: normalizeScore(vote_average),
      },
    });
  }

  render() {
    const {
      release_date,
      poster_path,
      title,
      vote_average,
      overview,
      genres,
    } = this.state.movie;
    const { match } = this.props;
    return (
      <>
        <div className="MovieDetails Content">
          <div className="MovieDetails__poster">
            <img
              className="MovieDetails__img"
              src={poster_path}
              alt={title}
            ></img>
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
          <Route path={`${match.path}/cast`} component={Cast}></Route>
          <Route path={`${match.path}/reviews`} component={Reviews}></Route>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
