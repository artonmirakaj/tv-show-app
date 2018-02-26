import {
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAIL,
  GET_EPISODES_LOADING,
  GET_EPISODES_LOADED,
} from './EpisodesActionTypes';
import apiConfig from '../apiConfig';

const getEpisodesSuccess = (res) => {
  return {
    type: GET_EPISODES_SUCCESS,
    res,
  }
}

const getEpisodesFail = (error) => {
  return {
    type: GET_EPISODES_FAIL,
    error,
  }
}

const getEpisodesLoading = () => {
  return { type: GET_EPISODES_LOADING }
}

const getEpisodesLoaded = () => {
  return { type: GET_EPISODES_LOADED }
}

export const getEpisodes = () => {
  return (dispatch) => {
    dispatch(getEpisodesLoading())
    apiConfig.get('https://api.trakt.tv/shows/game-of-thrones/seasons?extended=episodes')
      .then((res) => {
        dispatch(getEpisodesSuccess(res.data));
        dispatch(getEpisodesLoaded());
      })
      .catch((error) => {
        dispatch(getEpisodesFail(error));
        dispatch(getEpisodesLoaded());
      });
  }
}