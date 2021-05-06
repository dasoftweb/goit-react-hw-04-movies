import { Component } from 'react';
import {getTranding} from '../services/movies-api';
import MoviesList from '../components/MoviesList/MoviesList';


class Home extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await getTranding();
    this.setState({ movies: response.data.results });
  }

  render() {
    console.log();
    return (
      <div className='Content'>
        <h1>Trending today</h1>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
