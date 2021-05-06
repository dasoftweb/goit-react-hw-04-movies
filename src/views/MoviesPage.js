import { Component } from 'react';
import moviesApi from '../services/movies-api';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };


  render() {
    return (
      <form className="">
        <button type="submit" className="">
          <span className="">Search</span>
        </button>

        <input
          className=""
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    );
  }
}

export default MoviesPage;
