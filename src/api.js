//base URL for movies
const key = "f751c31e";
const baseURL = `http://www.omdbapi.com/?apikey=${key}&r=json&`;

const movie = "type=movie&plot=full";

export const searchMovieURL = (search) => `${baseURL}${movie}&t=${search}`;

//base URL for youtube
const trailerKey = "AIzaSyC2XQRKHBGpttWCq4q2gfFlZxwrkLcgwRI";
const trailerURL = `https://www.googleapis.com/youtube/v3/search?key=${trailerKey}&maxResults=1&`;

export const searchTrailerURL = (search) => `${trailerURL}q=${search}trailer`;
