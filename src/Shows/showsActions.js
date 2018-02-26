import {
  API_SUCCESS,
  API_FAIL,
  API_LOADING,
  API_LOADED,
} from './showsActionTypes';
import apiConfig from '../apiConfig';

const apiLoadSuccess = (res) => {
  return {type: API_SUCCESS, res}
};

const apiLoadFail = (error) => {
  return {type: API_FAIL, error}
};

const apiLoading = () => {
  return {type: API_LOADING}
};

const apiLoaded = () => {
  return {type: API_LOADED}
};

export const getShow = () => {
  return (dispatch) => {
    dispatch(apiLoading());
    apiConfig.get('https://api.trakt.tv/shows/game-of-thrones?extended=full')
      .then(res => {
        dispatch(apiLoadSuccess(res.data));
        dispatch(apiLoaded());
      })
      .catch(error => {
        dispatch(apiLoadFail(error));
        dispatch(apiLoaded());
      });
  };
};