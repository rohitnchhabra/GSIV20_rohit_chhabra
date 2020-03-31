import * as actions from '../actions';
import async from '../../services/async';
import { call, put } from 'redux-saga/effects';
import { API_KEY } from "../../config";

export function* moviesListRequest(action) {
    try {
        const response = yield call(async, `discover/movie?api_key=${API_KEY}&page=${action.payload}`, 'GET');
        if (response) {
            yield put(actions.moviesListSuccess(response.data))
        }
    } catch (e) {
        yield put(actions.moviesListError());
    }
}

export function* getMovieRequest(action) {
    try {
        const response = yield call(async, `movie/${action.payload.id}?api_key=${API_KEY}`, 'GET');
        if (response) {
            yield put(actions.getMovieSuccess(response.data));
        }
    } catch (e) {
        yield put(actions.getMovieError(e.response.data));
    }
}

export function* searchMoviesRequest(action) {
    try {
        const response = yield call(async, `search/movie?api_key=${API_KEY}&query=${action.payload.text}&page=${action.payload.page}`, 'GET');
        if (response) {
            yield put(actions.searchMoviesSuccess(response.data));
        }
    } catch (e) {
        yield put(actions.searchMoviesError());
    }
}