import {
  API_SUCCESS,
  API_FAIL,
  API_LOADING,
  API_LOADED,
} from './showsActionTypes';

const initialState = {
  seriesContent: {},
  loading: false,
  errorMessage: ''
};

export default function ShowsReducer(state = initialState, action) {
  switch (action.type) {
    case API_SUCCESS:
      return {
        ...state,
        seriesContent: action.res,
      };
    case API_FAIL:
      return {
        ...state,
        errorMessage: action.error,
      };
    case API_LOADED:
      return {
        ...state,
        loading: false,
      }
    case API_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}
