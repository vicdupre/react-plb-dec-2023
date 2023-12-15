import { createAction, nanoid } from "@reduxjs/toolkit";

const ADD_REVIEW = "review/add";
const REMOVE_REVIEW = "review/remove";

/* const createReview = (title, content) => {
  return {
    type: ADD_REVIEW,
    payload: { title, content, id: Date.now() },
  };
};

const deleteReview = (id) => {
  return {
    type: REMOVE_REVIEW,
    payload: { id },
  };
}; */
const createReview = createAction(ADD_REVIEW, (title, content) => {
  return {
    payload: {
      title,
      content,
      id: nanoid(),
    },
  };
});
const deleteReview = createAction(REMOVE_REVIEW, (id) => ({
  payload: { id },
}));

export { ADD_REVIEW, REMOVE_REVIEW, createReview, deleteReview };
