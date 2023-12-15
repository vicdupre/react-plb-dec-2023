import { combineReducers, createStore } from "redux";
import articlesReducer from "../reducers/articlesReducer";
import reviewsReducer from "../reducers/reviewsReducer";
import { configureStore } from "@reduxjs/toolkit";

/* const rootReducer = combineReducers({
  articles: articlesReducer,
  reviews: reviewsReducer,
});

const rootStore = createStore(rootReducer); */

const rootStore = configureStore({
  reducer: {
    articles: articlesReducer,
    reviews: reviewsReducer,
  },
});

export default rootStore;
