import { Component } from 'react';
import { getMovieById } from '../services/movies-api';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import routes from '../routes';
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

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const {
      release_date,
      poster_path,
      title,
      vote_average,
      overview,
      genres,
    } = this.state.movie;
    const { match, location } = this.props;
    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className="MovieDetails-goback"
        >
          Go back
        </button>
        <MovieDetails
          release_date={release_date}
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
          match={match}
          location={location}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
