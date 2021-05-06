import { Component } from 'react';
import { getCredits } from '../services/movies-api';
import CastList from '../components/CastList/CastList';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await getCredits(movieId);
    this.setState({ cast: response.data.cast });
  }

  render() {
    return <CastList cast={this.state.cast} />;
  }
}

export default Cast;
