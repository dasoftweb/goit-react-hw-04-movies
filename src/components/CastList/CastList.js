import PropTypes from 'prop-types';
import './CastList.scss';
import { normalizePosterPath } from '../FetchNormalizer';

const CastList = ({ cast }) => (
  <ul className="CastList">
    {cast.map(({ id, profile_path, name, character }) => (
      <li className="CastList__item" key={id}>
        <img
          className="CastList__img"
          src={normalizePosterPath(profile_path)}
          alt={name}
        ></img>
        <h4 className="CastList__title">{name}</h4>
        <p className="CastList__text">{character}</p>
      </li>
    ))}
  </ul>
);

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
