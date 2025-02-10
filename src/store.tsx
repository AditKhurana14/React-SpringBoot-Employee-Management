import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../src/redux/rootReducer.tsx'; // Assuming you have the rootReducer
import rootSaga from './Saga/rootSaga.tsx'; // Assuming you have the rootSaga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Set up the Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with the rootReducer and applyMiddleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)) // Apply middleware and DevTools
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;