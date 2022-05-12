// import { useState } from "react";
import "./App.css";
import Idea from "./Idea";

function App() {
  // const [state, setState] = useState();

  const list = [{ elm: 0 }, { elm: 1 }];

  return (
    <div className="boxes">
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      <button className="buttonAdd">Add</button>
      <button className="buttonRemove">Remove</button>
      <div className="externalBox">
        {list.map((x) => (
          <ul key={x.elm}>{<Idea />}</ul>
        ))}
      </div>
    </div>
  );
}

export default App;
