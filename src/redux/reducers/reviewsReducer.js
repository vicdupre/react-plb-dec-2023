import { createReducer } from "@reduxjs/toolkit";
import { createReview, deleteReview } from "../actions/reviewsActions";

const initialState = {
  reviews: [
    {
      id: 1,
      title: "Redux",
      content: "C'est bien mais c'est lourd, Zustand c'est mieux",
    },
  ],
};

const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(deleteReview, (state, action) => {
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id != action.payload.id
        ),
      };
    });
});
/* 
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case REMOVE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(
          (review) => review.id != action.payload.id
        ),
      };
    default:
      return state;
  }
}; */

export default reviewsReducer;
