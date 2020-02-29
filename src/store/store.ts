import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import SearchReducer from './Search/Reducer';

const rootReducer = combineReducers({ SearchReducer });

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware()));
