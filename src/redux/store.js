import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'

const reducers = combineReducers({
    userDetails: userReducer
})

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['userDetails']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
