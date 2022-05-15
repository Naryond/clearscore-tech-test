import { useState } from "react";
import "./App.css";
import "./Button.css";
import Idea from "./Idea";

// whenever updating state
// 1 - copy current state
// 2 - manipulate the copy of state (not the actual state)
// 3 - reset state with updated copy

const pets = ['dog','cat', 'fish'];

console.log(pets.pop());

const card = {
  title: 'goodbye',
  description: 'Today is a nice day for a walk',
  date: new Date(),
  id: 1
}

// const card2 = {
//   title: 'hello',
//   description: 'Today is a nice day for a walk',
//   date: new Date(),
//   id:2
// }

function App() {
  const [list, setList] = useState([card]);

  const addOne = () => {
    // HOW DO WE GET TITLE HERE?
    const newCard = {
      title: 'hello',
      description: 'Today is a nice day for a walk',
      date: new Date(),
      id: 3
    };

    setList([...list, newCard])
    // setList((prevState) => [...list, 1]);
  };

  const removeOne = (card) => {
    console.log(card)
    // replace list with an array with the last item currently in state

    // [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]

    // setList(() => [list.pop()]);
  };

  return (
    <div className="boxes">
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      MOVE THIS INTO IDEA
      <button className="button" type="submit" onClick={addOne}>
        Add New Tile
      </button>
      <div className="externalBox">
        {list.map((item) => {
          return (
          <ul key={item}><Idea card={item} cancel={removeOne} /></ul>
        )
        })}
      </div>
    </div>
  );
}

export default App;
