import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import { characterReducer } from './characters/reducer';

const rootReducer = combineReducers({
  // ... reducers here
  character: characterReducer,
});

const persistConfig = {
  key: 'app-smart',
  storage,
  whitelist: ['character', 'characters'],
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
