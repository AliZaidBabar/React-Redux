import { createStore } from 'redux';
import bankReducer from './reducers';

const store = createStore(bankReducer);

export default store;
