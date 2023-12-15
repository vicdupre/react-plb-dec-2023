import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => Math.max(state - 1, 0),
    reset: () => initialState,
  },
  selectors: {
    getCounter: (state) => state,
  },
});
export const { getCounter } = counterSlice.selectors;
export const counterActions = counterSlice.actions;
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
