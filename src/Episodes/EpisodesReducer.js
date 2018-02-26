import {
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAIL,
  GET_EPISODES_LOADING,
  GET_EPISODES_LOADED,
} from './EpisodesActionTypes';

const initialState = {
  seriesEpisodes: [],
  loading: false,
  errorMessage: ''
};

export default function EpisodesReducer(state = initialState, action) {
  switch (action.type) {

    case GET_EPISODES_SUCCESS:
      return {
        ...state,
        seriesEpisodes: action.res,
      };

    case GET_EPISODES_FAIL:
      return {
        ...state,
        errorMessage: action.error,
      };

    case GET_EPISODES_LOADED:
      return {
        ...state,
        loading: false,
      };

    case GET_EPISODES_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
