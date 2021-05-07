import PropTypes from 'prop-types';
import './CastList.scss';
import { normalizePosterPath } from '../FetchNormalizer';

const CastList = ({ cast }) => (
  <>
    {cast.length > 0 ? (
      <ul className="CastList">
        {cast.map(({ id, profile_path, name, character }) => (
          <li className="CastList-item" key={id}>
            <img
              className="CastList-img"
              src={normalizePosterPath(profile_path)}
              alt={name}
            ></img>
            <h4 className="CastList-title">{name}</h4>
            <p className="CastList-text">{character}</p>
          </li>
        ))}
      </ul>
    ) : (
      <h5 className='Content-title'>Sorry! There is no cast information for this movie :(</h5>
    )}
  </>
);

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
