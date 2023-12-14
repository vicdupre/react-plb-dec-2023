import { createStore } from "redux";
import articlesReducer from "../reducers/articlesReducer";

const articleStore = createStore(articlesReducer);

export default articleStore;
