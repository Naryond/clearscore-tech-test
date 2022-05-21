import { useState } from "react";
import "./Style.css";
import Idea from "./Idea";
import { v4 as uuidv4 } from "uuid";

// whenever updating state
// 1 - copy current state
// 2 - manipulate the copy of state (not the actual state)
// 3 - reset state with updated copy

const card = {
  title: "",
  content: "",
  date: new Date(),
  id: uuidv4(),
};

function App() {
  const [list, setList] = useState([card]);

  const addOne = () => {
    const newCard = {
      title: "",
      content: "",
      date: new Date(),
      id: uuidv4(),
    };
    setList([...list, newCard]);
  };

  const sort = (x) => {
    list.sort(x.date);
  };

  // Filter is a good non-destructive method to erase the element based on its Id
  const removeOne = (x) => {
    setList(list.filter((listElement) => listElement.id !== x.id));
  };

  return (
    <div>
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      <button className="button" onClick={addOne}>
        Add New Idea
      </button>
      <button className="button" onClick={sort}>
        Sort
      </button>
      <div className="board">
        {list.map((item) => {
          return (
            <ul className="ul" key={item.id}>
              <Idea card={item} cancel={removeOne} />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
