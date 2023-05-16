import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: 0,
  value: 2,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    formInput: function (state, action) {
      state.value = action.payload;
    },
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
      state.result = state.result + state.value;
    },
    addAsync: function (state, action) {
      //   setTimeout(() => {
      //     state.result = state.result + state.value;
      //   }, 1000);
      state.result = state.result + state.value;
    },
    addIfOdd: function (state, action) {
      if (state.result % 2 !== 0) {
        state.result = state.result + state.value;
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
