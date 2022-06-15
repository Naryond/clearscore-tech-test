import { useState, useEffect } from "react";
import "./Style.css";
import Idea from "./Idea";
import { v4 as uuidv4 } from "uuid";

let entry = JSON.parse(localStorage.getItem("list")) || [];

function App() {
  const [list, setList] = useState(entry);

  useEffect(() => {
    let entry = localStorage.getItem("list");
    setList(JSON.parse(entry));
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addOne = () => {
    const newCard = {
      title: "title",
      content: "content",
      date: new Date().toLocaleString(),
      id: uuidv4(),
    };
    setList([...list, newCard]);
  };

  const editCard = (updatedCard) => {
    const updatedCardInPlace = list.reduce((accumulator, current) => {
      // if the card is not relevent then just keep as is
      if (updatedCard.id !== current.id) {
        return [...accumulator, current];
      }
      // if the card is the same one, then just edit
      return [...accumulator, updatedCard];
    }, []);

    setList(updatedCardInPlace);
  };

  const sortName = () => {
    const sorted = [...list].sort(function (a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });

    setList(sorted);
  };

  const sortDate = () => {
    const sorted = [...list].sort(function (a, b) {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    });

    setList(sorted);
  };

  const removeOne = (x) => {
    setList(list.filter((listElement) => listElement.id !== x.id));
  };

  return (
    <div>
      <header className="header">
        <h1 className="h1">My Idea Board</h1>
      </header>
      <button className="button" onClick={addOne}>
        Add New Idea
      </button>
      <button className="button" onClick={sortName}>
        Sort by Name
      </button>
      <button className="button" onClick={sortDate}>
        Sort by Date
      </button>
      <div className="board">
        {list.map((item) => {
          return (
            <ul className="ul" key={item.id}>
              <Idea card={item} cancel={removeOne} editCard={editCard} />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
