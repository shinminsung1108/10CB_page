import { createSlice, configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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

const userStore = createSlice({
    name: 'user',
    initialState: {
        username: "",
        password: "",
        tier: "",
        race: "",
        race2: "",
        race3: "",
      },

    reducers: {
      setUser(state, action) {
        state = action.payload
        console.log(action.payload)
        return state
      }
    }
})

export const { setUser } = userStore.actions

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };

const persistedReducer = persistReducer(
    persistConfig, combineReducers(
        {
            userStore: userStore.reducer
        }
    ));

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  export const persistor = persistStore(store);
  export default store;