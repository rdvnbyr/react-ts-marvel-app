import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import { characterReducer } from './characters/reducer';

const rootReducer = combineReducers({
  // ... reducers here
  app: characterReducer,
});

const persistConfig = {
  key: 'app-smart-marvel-app',
  storage,
  whitelist: [],
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
