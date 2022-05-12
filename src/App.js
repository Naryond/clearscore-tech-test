import { useState } from "react";
import "./App.css";
import Idea from "./Idea";

function App() {
  const [list, setList] = useState([{a: 1}]);
  
  const addOne = () => {
    setList(() => [...list, list.push()]);
  };

  const removeOne = () => {
    setList(() => [list.pop()])
  };

  return (
    <div className="boxes">
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      <button className="buttonAdd" type="submit" onClick={addOne}>
        Add
      </button>
      <button className="buttonRemove" type="submit" onClick={removeOne}>
        Remove
      </button>
      <div className="externalBox">
        {list.map((a, i) => (
          <ul key={i}>{<Idea />}</ul>
        ))}
      </div>
    </div>
  );
}

export default App;
