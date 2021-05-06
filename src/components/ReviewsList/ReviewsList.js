import PropTypes from 'prop-types';
import './ReviewsList.scss';

const ReviewsList = ({ reviews }) => (
  <ul className="ReviewsList">
    {reviews.map(({ id, author, content }) => (
      <li className="ReviewsList__item" key={id}>
        <h3 className="ReviewsList__title"># {author}</h3>
        <p className="ReviewsList__text">{content}</p>
      </li>
    ))}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
