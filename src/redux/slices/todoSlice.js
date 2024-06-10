import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: '리액트 공부하기',
    content: '리액트 공부',
    isDone: false,
  },
  {
    id: 1,
    title: '이거슨제목',
    content: '이거슨내용',
    isDone: true,
  },
]

// TODO: todoSlice 를 작성하세요.
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const nextTodo = action.payload
      state.push(nextTodo);
    },
    deleteTodo: (state, action) => {

      const id = action.payload;
      const index = state.findIndex(item => item.id === id);
      
      if(index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const index = state.findIndex(item => item.id === id);
      console.log(index)
      if(index !== -1){
        state[index].isDone = !state[index].isDone; 
      }
    }
  }
})

export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;