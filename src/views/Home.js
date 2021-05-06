import { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviesApi from '../services/movies-api';

class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await MoviesApi.getTranding();
    this.setState({ movies: response.data.results });
  }

  render() {
    console.log(this.state.movies);
    console.log(this.props.match.url);
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
