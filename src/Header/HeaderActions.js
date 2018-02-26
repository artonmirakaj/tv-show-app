import {
  RATINGS_SUCCESS,
  RATINGS_FAIL,
  RATINGS_LOADING,
  RATINGS_LOADED,
} from './HeaderActionTypes';
import apiConfig from '../apiConfig';

const ratingsSuccess = (res) => {
  return {
    type: RATINGS_SUCCESS,
    res,
  }
}

const ratingsFail = (error) => {
  return {
    type: RATINGS_FAIL,
    error,
  }
}

const ratingsLoading = () => {
  return { type: RATINGS_LOADING }
}

const ratingsLoaded = () => {
  return { type: RATINGS_LOADED }
}

export const getRatings = () => {
  return (dispatch) => {
    dispatch(ratingsLoading())
    apiConfig.get('https://api.trakt.tv/shows/game-of-thrones/seasons/1/ratings')
      .then((res) => {
        dispatch(ratingsSuccess(res.data));
        dispatch(ratingsLoaded());
      })
      .catch((error) => {
        dispatch(ratingsFail(error));
        dispatch(ratingsLoaded());
      });
  }
}