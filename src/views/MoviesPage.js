import { Component } from 'react';
import { getMovieByQuery } from '../services/movies-api';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      this.setState({
        searchQuery: search.replace(/^\?+/, ''),
      });
    }
  }

  async componentDidUpdate(prevProps, PrevState) {
    const { searchQuery } = this.state;
    if (PrevState.searchQuery !== searchQuery) {
      const response = await getMovieByQuery(searchQuery);
      this.setState({ movies: [...response.data.results] });
    }

    const { location } = this.props;
    location.search = searchQuery;
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
