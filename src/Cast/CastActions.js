import {
  GET_CAST_SUCCESS,
  GET_CAST_FAIL,
  GET_CAST_LOADED,
  GET_CAST_LOADING,
} from './CastActionTypes';
import apiConfig from '../apiConfig';

const getCastSuccess = (res) => {
  return {
    type: GET_CAST_SUCCESS,
    res
  }
};

const getCastFail = (error) => {
  return {
    type: GET_CAST_FAIL,
    error
  }
};

const getCastLoaded = () => {
  return {
    type: GET_CAST_LOADED
  }
};

const getCastLoading = () => {
  return {
    type: GET_CAST_LOADING
  }
}

export const getCast = () => {
  return (dispatch) => {
    dispatch(getCastLoading());
    apiConfig.get('https://api.trakt.tv/shows/game-of-thrones/people')
      .then(res => {
        dispatch(getCastSuccess(res.data));
        dispatch(getCastLoaded());
      })
      .catch(error => {
        dispatch(getCastFail(error));
        dispatch(getCastLoaded());
      })
  }
}