import { createStore } from 'redux';

import urlBingImageOfTheDay from './reducers';

const store = createStore(urlBingImageOfTheDay);

export default store;
