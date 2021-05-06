import { Component } from 'react';
import { getReviews } from '../services/movies-api';
import ReviewsList from '../components/ReviewsList/ReviewsList';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await getReviews(movieId);
    this.setState({ reviews: response.data.results });
  }

  render() {
    return <ReviewsList reviews={this.state.reviews} />;
  }
}

export default Reviews;
