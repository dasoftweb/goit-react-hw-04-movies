import { Component } from 'react';
import MoviesApi from '../services/movies-api';
import noimage from '../images/noimage.svg';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await MoviesApi.getCredits(movieId);
    this.setState({ cast: response.data.cast });
  }

  normalizePosterPath = url => {
    if (url) {
      return 'https://image.tmdb.org/t/p/w500' + url;
    }
    return noimage;
  };

  render() {
    return (
      <>
        <ul className="cast-list">
          {this.state.cast.map(cast => (
            <li className="cast-list__item" key={cast.id}>
              <img
                className="cast-list__img"
                src={this.normalizePosterPath(cast.profile_path)}
              ></img>
              <h4 className="cast-list__title">{cast.name}</h4>
              <p className="cast-list__text">{cast.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
