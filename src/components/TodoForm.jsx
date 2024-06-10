import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmitTodo = (e) => {
    e.preventDefault();

    if(!title.trim() || !content.trim()){
      alert('제목과 내용을 모두 입력해주세요');
      return;
    }

    const nextTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    }

    dispatch(addTodo(nextTodo));
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmitTodo}>
      <label>제목: </label>
      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <label>내용: </label>
      <input type="text" value={content} onChange={(e)=> setContent(e.target.value)}/>
      <button type="submit">추가</button>
    </form>
  );
}
