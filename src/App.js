// import { useState } from "react";
import "./App.css";
import Idea from "./Idea";

function App() {
  // const [state, setState] = useState();

  let list = [{ elm: 0 }, { elm: 1 }];

  const addOne = () => {
    return list.push({ elm: list.length + 1 });
  };

  const removeOne = () => {
    return list.pop();
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
        {list.map((x) => (
          <ul key={x.elm}>{<Idea />}</ul>
        ))}
      </div>
    </div>
  );
}

export default App;
