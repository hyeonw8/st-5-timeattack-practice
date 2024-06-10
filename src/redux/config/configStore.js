// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.import { configureStore } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../slices/calculatorSlice";

// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  }
})

export default store;