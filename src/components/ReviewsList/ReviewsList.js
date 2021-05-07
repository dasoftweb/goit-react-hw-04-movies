import PropTypes from 'prop-types';
import './ReviewsList.scss';

const ReviewsList = ({ reviews }) => (
  <>
    {reviews.length > 0 ? (
      <ul className="ReviewsList">
        {reviews.map(({ id, author, content }) => (
          <li className="ReviewsList__item" key={id}>
            <h3 className="ReviewsList__title"># {author}</h3>
            <p className="ReviewsList__text">{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <h5 className="Content-title">
        Sorry! There is no reviews on this movie :(
      </h5>
    )}
  </>
);

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
