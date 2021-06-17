//base URL
const key = "f751c31e";
const baseURL = `http://www.omdbapi.com/?apikey=${key}&r=json&`;

const movie = "type=movie&plot=full";

export const searchMovieURL = (search) => {
  `${baseURL}${movie}&t=${search}`;
};
