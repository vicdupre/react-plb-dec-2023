import { ADD_ARTICLE, REMOVE_ARTICLE } from "../actions/articlesActions";

const initialState = {
  articles: [
    {
      id: 1,
      title: "Premier article",
      content:
        "Redux peut être utilisé avec des composants fonctionnels en utilisant la bibliothèque react-redux. react-redux fournit des hooks qui permettent aux composants fonctionnels de se connecter au store Redux. Voici les principaux hooks que vous utiliserez pour connecter des composants fonctionnels au store Redux :",
    },
  ],
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
