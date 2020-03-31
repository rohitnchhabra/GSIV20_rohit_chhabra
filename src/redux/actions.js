import { createAction } from 'redux-actions';
import constants from './constants';

export const moviesListRequest = createAction(constants.MOVIES_LIST_REQUEST);
export const moviesListSuccess = createAction(constants.MOVIES_LIST_SUCCESS);
export const moviesListError = createAction(constants.MOVIES_LIST_ERROR);

export const getMovieRequest = createAction(constants.GET_MOVIE_REQUEST);
export const getMovieSuccess = createAction(constants.GET_MOVIE_SUCCESS);
export const getMovieError = createAction(constants.GET_MOVIE_ERROR);

export const searchMoviesRequest = createAction(constants.SEARCH_MOVIES_REQUEST);
export const searchMoviesSuccess = createAction(constants.SEARCH_MOVIES_SUCCESS);
export const searchMoviesError = createAction(constants.SEARCH_MOVIES_ERROR);