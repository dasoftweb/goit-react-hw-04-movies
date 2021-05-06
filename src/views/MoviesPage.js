import { Component } from 'react';
import { getMovieByQuery } from '../services/movies-api';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  async componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery } = this.state;
      const response = await getMovieByQuery(searchQuery);
      this.setState({ movies: [...response.data.results] });
    }
  }

  onChangeQuery = query => {
    this.setState({
      movies: [],
      searchQuery: query,
    });
  };

  render() {
    return (
      <div className="Content">
        <SearchForm onSubmit={this.onChangeQuery} />
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default MoviesPage;
