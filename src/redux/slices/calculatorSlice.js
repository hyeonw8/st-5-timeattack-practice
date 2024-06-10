import { createSlice } from "@reduxjs/toolkit";

// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

const initialState = {
  result: 0,
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.result += Number(action.payload);
    },
    minusNumber: (state, action) => {
      state.result  -= Number(action.payload);
    },
  }
})

export const { addNumber, minusNumber, setValue } = calculatorSlice.actions;
export default calculatorSlice.reducer;