import {
  RATINGS_SUCCESS,
  RATINGS_FAIL,
  RATINGS_LOADING,
  RATINGS_LOADED,
} from './HeaderActionTypes';

const initialState = {
  seriesRatings: {},
  loading: false,
  errorMessage: ''
};

export default function HeaderReducer(state = initialState, action) {
  switch (action.type) {

    case RATINGS_SUCCESS:
      return {
        ...state,
        seriesRatings: action.res,
      };

    case RATINGS_FAIL:
      return {
        ...state,
        errorMessage: action.error,
      };

    case RATINGS_LOADED:
      return {
        ...state,
        loading: false,
      };

    case RATINGS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}