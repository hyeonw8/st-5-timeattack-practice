// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem() {

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
        <p>이거슨제목</p>
        <p>이거슨내용</p>
      </section>
      <section>
        <button>완료</button>
        <button>삭제</button>
      </section>
    </li>
  );
}
