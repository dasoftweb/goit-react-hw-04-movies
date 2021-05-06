import { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MoviesApi from '../services/movies-api';
import Cast from '../views/Cast';
import noimage from '../images/noimage.svg';


class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await MoviesApi.getMovie(movieId);
    const { poster_path, release_date, vote_average } = response.data;
    this.setState({
      movie: {
        ...response.data,
        poster_path: this.normalizePosterPath(poster_path),
        release_date: this.normalizeDate(release_date),
        vote_average: this.normalizeScore(vote_average),
      },
    });
  }

  normalizeDate = date => {
    const toDate = new Date(date);
    return toDate.getFullYear();
  };

  normalizePosterPath = url => {
    if (url) {
      return 'https://image.tmdb.org/t/p/w500' + url;
    }
    return noimage;
  };

  normalizeScore = score => {
    return score * 10;
  };

  render() {
    const {
      release_date,
      poster_path,
      title,
      vote_average,
      overview,
      id,
    } = this.state.movie;
    // console.log(this.state.movie);
    const { match } = this.props;
    return (
      <>
        <div>
          <img src={poster_path}></img>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User Score: {vote_average}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>ganres here</p>
        </div>
        <div>
          <h5>Additional information</h5>
          <ul>
            <li>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Route path={`${match.path}/cast`} component={Cast}></Route>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
