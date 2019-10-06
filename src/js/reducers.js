import { combineReducers } from 'redux';
import { SET_BING_IMAGE_OF_THE_DAY } from './actions';

// Parte do reducer que mantém apenas a parte do background
function urlBingImageOfTheDay(state = null, action) {
  switch (action.type) {
    case SET_BING_IMAGE_OF_THE_DAY:
      return action.text;
    default:
      return state;
  }
}

const challengeCharlieApp = combineReducers({
  urlBingImageOfTheDay,
});

export default challengeCharlieApp;
