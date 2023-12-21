import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState("Greeting Message");

  const thaiGreeting = () => {
    setCounter("สวัสดี!");
  };

  const englishGreeting = () => {
    setCounter("Hi!");
  };

  const chineseGreeting = () => {
    setCounter("你好!");
  };


  return (
    <div className="App">
      <div className="greeting-container">{counter}</div>
      <div className="buttons">
        <button onClick={thaiGreeting}>สวัสดี!</button>
        <button onClick={englishGreeting}>Hi!</button>
        <button onClick={chineseGreeting}>你好!</button>
      </div>
    </div>
  );
}

export default App;
