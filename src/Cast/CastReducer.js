import {
  GET_CAST_SUCCESS,
  GET_CAST_FAIL,
  GET_CAST_LOADED,
  GET_CAST_LOADING,
} from './CastActionTypes';

const initialState = {
  cast: [],
  loading: false,
  errorMessage: '',
}

export default function CastReducer (state = initialState, action) {
  switch (action.type) {
    case GET_CAST_SUCCESS:
      return {
        ...state,
        cast: action.res.cast,
      }

    case GET_CAST_FAIL:
      return {
        ...state,
        errorMessage: action.error,
      }

    case GET_CAST_LOADED:
      return {
        ...state,
        loading: false,
      }

    case GET_CAST_LOADING:
      return {
        ...state,
        loading: true,
      }
      
    default:
      return state;
  }
};