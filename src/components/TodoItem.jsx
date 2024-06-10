import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({todo}) {
  const distpatch = useDispatch();
  //console.log(todos);
  const { id, title, content, isDone } = todo;

  const handleDeleteTodo = (id) => {
    distpatch(deleteTodo(id));
  }

  const handleToggleTodo = (id) => {
    distpatch(toggleTodo(id));
  }

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>{title}</p>
        <p>{content}</p>
      </section>
      <section>
        <button onClick={() => handleToggleTodo(id)}>{isDone === false ? '완료' : '취소'}</button>
        <button  onClick={() => handleDeleteTodo(id)}>삭제</button>
      </section>
    </li>
  );
}
