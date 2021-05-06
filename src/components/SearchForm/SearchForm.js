// import PropTypes from 'prop-types';
import { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
