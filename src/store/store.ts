import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SearchReducer from './Search/reducer';
import MovieReducer from './Movie/reducer';

const rootReducer = combineReducers({ search: SearchReducer, movie: MovieReducer });
export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
