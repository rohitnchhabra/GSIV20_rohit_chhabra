import update from "immutability-helper";
import constants from "../constants";
import { handleActions } from "redux-actions";

const initialState = {
    moviesList: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isError: false
    },
    movie: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isError: false
    },
    search: {
        data: {},
        isLoading: false,
        isSuccess: false,
        isError: false
    },
};

const handleMoviesListRequest = (state, action) => {
    return update(state, {
        moviesList: {
            isLoading: { $set: true },
            isSuccess: { $set: false },
            isError: { $set: false }
        }
    });
};

const handleMoviesListSuccess = (state, action) => {
    return update(state, {
        moviesList: {
            isLoading: { $set: false },
            isSuccess: { $set: true },
            isError: { $set: false },
            data: { $set: action.payload }
        }
    });
};

const handleMoviesListError = (state, action) => {
    return update(state, {
        moviesList: {
            isLoading: { $set: false },
            isSuccess: { $set: false },
            isError: { $set: true }
        }
    });
};


const handleMovieRequest = (state, action) => {
    return update(state, {
        movie: {
            isLoading: { $set: true },
            isSuccess: { $set: false },
            isError: { $set: false }
        }
    });
};

const handleMovieSuccess = (state, action) => {
    return update(state, {
        movie: {
            isLoading: { $set: false },
            isSuccess: { $set: true },
            isError: { $set: false },
            data: { $set: action.payload }
        }
    });
};

const handleMovieError = (state, action) => {
    return update(state, {
        movie: {
            isLoading: { $set: false },
            isSuccess: { $set: false },
            isError: { $set: true }
        }
    });
};


const handleSearchRequest = (state, action) => {
    return update(state, {
        search: {
            isLoading: { $set: true },
            isSuccess: { $set: false },
            isError: { $set: false }
        }
    });
};

const handleSearchSuccess = (state, action) => {
    return update(state, {
        search: {
            isLoading: { $set: false },
            isSuccess: { $set: true },
            isError: { $set: false },
            data: { $set: action.payload }
        }
    });
};

const handleSearchError = (state, action) => {
    return update(state, {
        search: {
            isLoading: { $set: false },
            isSuccess: { $set: false },
            isError: { $set: true }
        }
    });
};



export default handleActions(
    {
        [constants.MOVIES_LIST_REQUEST]: handleMoviesListRequest,
        [constants.MOVIES_LIST_SUCCESS]: handleMoviesListSuccess,
        [constants.MOVIES_LIST_ERROR]: handleMoviesListError,

        [constants.GET_MOVIE_REQUEST]: handleMovieRequest,
        [constants.GET_MOVIE_SUCCESS]: handleMovieSuccess,
        [constants.GET_MOVIE_ERROR]: handleMovieError,

        [constants.SEARCH_MOVIES_REQUEST]: handleSearchRequest,
        [constants.SEARCH_MOVIES_SUCCESS]: handleSearchSuccess,
        [constants.SEARCH_MOVIES_ERROR]: handleSearchError,

    },
    initialState
);
