import { ADD_ARTICLE, REMOVE_ARTICLE } from "../actions/articlesActions";

const initialState = {
  articles: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default articlesReducer;
