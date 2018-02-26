import { combineReducers } from 'redux';
import EpisodesReducer from './Episodes/EpisodesReducer';
import ShowsReducer from './Shows/showsReducer';
import CastReducer from './Cast/CastReducer';
import HeaderReducer from './Header/HeaderReducer';

const rootReducer = combineReducers({
  EpisodesReducer,
  ShowsReducer,
  CastReducer,
  HeaderReducer,
});

export default rootReducer;