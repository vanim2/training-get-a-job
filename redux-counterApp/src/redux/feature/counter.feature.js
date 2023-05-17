import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: function (state, action) {
      state.result = state.result + 1;
    },
    decrement: function (state, action) {
      if (state.result <= 0) {
        state.result = 0;
      } else {
        state.result = state.result - 1;
      }
    },
    addAmount: function (state, action) {
      state.result = state.result + action.payload;
    },
    addAsync: function (state, action) {
      //   setTimeout(() => {
      //     state.result = state.result + state.value;
      //   }, 1000);
      state.result = state.result + action.payload;
    },
    addIfOdd: function (state, action) {
      if (state.result % 2 !== 0) {
        state.result = state.result + action.payload;
      }
    },
  },
});

export default counterSlice.reducer;
export const {
  addAmount,
  increment,
  decrement,
  addIfOdd,
  addAsync,
  formInput,
} = counterSlice.actions;
