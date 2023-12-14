const ADD_ARTICLE = "article/add";
const REMOVE_ARTICLE = "article/remove";

const createArticle = (title, content) => {
  return {
    type: ADD_ARTICLE,
    payload: { title, content, id: Date.now() },
  };
};

const deleteArticle = (id) => {
  return {
    type: REMOVE_ARTICLE,
    payload: { id },
  };
};

export { ADD_ARTICLE, REMOVE_ARTICLE, createArticle, deleteArticle };
