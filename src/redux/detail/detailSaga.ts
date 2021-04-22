import { call, put, takeLatest } from 'redux-saga/effects';
import { loadMovieDetail, saveFavoriteMovie, removeFavoriteMovie, setMovieDetailData, setFavorite, resetMovieDetailData } from './detailSlice';
import { fetchDetailMovie } from './detailAPI';
import { DetailMovie } from './detailModels';
import { SearchMovie } from '../search/searchModels';
import { getFavoriteMovies, localStorageFavoriteMovies } from '../common';

function* fetchDetail(action: any) {
  yield put(resetMovieDetailData());
  if(action.payload) {
    yield isFavorite(action.payload);
    const movie: DetailMovie = yield call(fetchDetailMovie, action.payload);
    yield put(setMovieDetailData(movie));
  }
}

function* saveFavorite(action: any) {
  let favoriteMovies = getFavoriteMovies();  
  if(favoriteMovies.some((movie) => movie.imdbID === action.payload.imdbID)) {
    return;
  }

  const movie: SearchMovie = {
    Title: action.payload.Title,
    Poster: action.payload.Poster,
    Type: action.payload.Type,
    Year: action.payload.Year,
    imdbID: action.payload.imdbID,
  }
  favoriteMovies.push(movie);
  localStorage.setItem(localStorageFavoriteMovies, JSON.stringify(favoriteMovies));
  yield put(setFavorite(true));
}

function* removeFavorite(action: any) {
  let favoriteMovies = getFavoriteMovies(); 
  favoriteMovies = favoriteMovies.filter((movie) => movie.imdbID !== action.payload);
  localStorage.setItem(localStorageFavoriteMovies, JSON.stringify(favoriteMovies));
  yield put(setFavorite(false));
}

function* isFavorite(id: string) {
  let favoriteMovies = getFavoriteMovies();
  yield put(setFavorite(favoriteMovies.some((movie) => movie.imdbID === id)));
}

function* detailSaga() {
  yield takeLatest(loadMovieDetail, fetchDetail);
  yield takeLatest(saveFavoriteMovie, saveFavorite);
  yield takeLatest(removeFavoriteMovie, removeFavorite);
}

export default detailSaga; 