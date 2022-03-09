import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { persistedRootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

//* use devtools extention
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));

// now we generate an application history object.
export const routeHistory = createBrowserHistory();

const store = createStore(persistedRootReducer, middleware);
const persistor = persistStore(store);
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export { store, persistor };
export type { RootState, AppDispatch };

// then we run the saga
sagaMiddleware.run(rootSaga);
