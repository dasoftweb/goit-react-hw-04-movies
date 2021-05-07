import Loader from 'react-loader-spinner';
import './Loader.scss';

const loader = () => {
  return (
    <Loader
      className="Loader"
      type="Oval"
      color="#CB2400"
      height={100}
      width={100}
      timeout={2000}
    />
  );
};
export default loader;
