//base URL for movies
const key = process.env.REACT_APP_MOVIE_APIKEY;
const baseURL = `http://www.omdbapi.com/?apikey=${key}&r=json&`;

const movie = "type=movie&plot=full";

export const searchMovieURL = (search) => `${baseURL}${movie}&t=${search}`;

//base URL for youtube
const trailerKey = process.env.REACT_APP_YOUTUBE_APIKEY;
const trailerURL = `https://www.googleapis.com/youtube/v3/search?key=${trailerKey}&maxResults=1&`;

export const searchTrailerURL = (search) => `${trailerURL}q=${search}trailer`;

//base URL for movieLISTS
const listKey = process.env.REACT_APP_MOVIELIST_APIKEY;
const popularListURL = `https://api.themoviedb.org/3/movie/popular?api_key=${listKey}&language=en-US&page=1`;
const nowPlayingListURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${listKey}&language=en-US&page=1`;
const upcominListURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${listKey}&language=en-US&page=1`;

export const searchPopularURL = () => popularListURL;
export const searchNowPlayingURL = () => nowPlayingListURL;
export const searchUpcomingURL = () => upcominListURL;
