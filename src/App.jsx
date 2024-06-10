import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNumber, minusNumber } from "./redux/slices/calculatorSlice";
import { useState } from "react";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const [ inputValue, setInputValue] = useState(0);

  const handleAddNumber = () => {
    dispatch(addNumber(inputValue))
  }

  const handleMinusNumber = () => {
    dispatch(minusNumber(inputValue))
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> 만큼을 
        <button onClick={handleAddNumber}>더할게요</button> 
        <button onClick={handleMinusNumber}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
