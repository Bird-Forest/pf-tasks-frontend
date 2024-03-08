import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { authReducer } from './user/authSlice';
import { filtersReducer } from './filter/filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  //   blacklist: ['filter'],
};

// const tasksPersistConfig = {
//   key: 'tasks',
//   storage,
//   whitelist: ['tasks'],
//   //   blacklist: ['filter'],
// };

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: tasksReducer,
  filter: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
