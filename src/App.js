import { useState } from "react";
import "./App.css";
import "./Button.css";
import Idea from "./Idea";

function App() {
  const [list, setList] = useState([{ a: 1 }]);

  const addOne = () => {
    setList(() => [...list, list.push()]);
  };

  const removeOne = () => {
    setList(() => [list.pop()]);
  };

  return (
    <div className="boxes">
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      <button className="button" type="submit" onClick={addOne}>
        Add New Tile
      </button>
      <div className="externalBox">
        {list.map((i) => (
          <ul key={i}>{<Idea cancel={removeOne} />}</ul>
        ))}
      </div>
    </div>
  );
}

export default App;
