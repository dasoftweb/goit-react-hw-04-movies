import noimage from '../images/noimage.svg';

export const normalizePosterPath = url => {
  if (url) {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }
  return noimage;
};

export const normalizeScore = score => {
  return score * 10;
};

export const normalizeDate = date => {
  const toDate = new Date(date);
  return toDate.getFullYear();
};


