import { combineReducers, createStore } from "redux";
import articlesReducer from "../reducers/articlesReducer";
import reviewsReducer from "../reducers/reviewsReducer";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  articles: articlesReducer,
  reviews: reviewsReducer,
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
/*
const rootStore = createStore(rootReducer); */

const rootStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

const rootPersitor = persistStore(rootStore);

export { rootPersitor };
export default rootStore;
