import "./App.css";
import { useState } from "react"



function App() {
  const [stringShow, setString] = useState("Greeting Message");

  const showValueSawadee = () => {
    setString('สวัสดี!');
  };

  const showValueHi = () => {
    setString('Hi!')
  }

  const showValueChinaHello = () => {
    setString('你好!')
  }

  return (
    <div className="App">
      <div className="greeting-container">{stringShow}</div>
      <div className="buttons">
        <button onClick={showValueSawadee}>สวัสดี!</button>
        <button onClick={showValueHi}>Hi!</button>
        <button onClick={showValueChinaHello}>你好!</button>
      </div>
    </div>
  );
}

export default App;
