import { takeLatest, all } from 'redux-saga/effects';
import constants from './constants';
import {
  moviesListRequest,
  getMovieRequest,
  searchMoviesRequest,
  //   clearSearchMoviesRequest
} from './movies/actions';

export function* watchActions() {
  yield takeLatest(constants.MOVIES_LIST_REQUEST, moviesListRequest);
  yield takeLatest(constants.GET_MOVIE_REQUEST, getMovieRequest);
  yield takeLatest(constants.SEARCH_MOVIES_REQUEST, searchMoviesRequest);
  //   yield takeLatest(constants.CLEAR_SEARCH_MOVIES_REQUEST, clearSearchMoviesRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}