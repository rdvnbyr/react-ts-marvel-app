import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  // ... reducers here
});

const persistConfig = {
  key: 'app-smart',
  storage,
  whitelist: [],
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
