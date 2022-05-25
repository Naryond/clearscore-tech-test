import { useState, useEffect } from "react";
import "./Style.css";
import Idea from "./Idea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setList] = useState([]);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  console.log({ list });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addOne = () => {
    const newCard = {
      title: 'title',
      content: 'content',
      date: new Date(),
      id: uuidv4(),
    };
    setList([...list, newCard]);
  };

  const editCard = (updatedCard) => {
    // console.log({ updatedCard }) 
    // const filteredOutOldCard = list.filter(item => item.id !== updatedCard.id);

    const updatedCardInPlace = list.reduce((accumulator, current) => {
      // if the card is not relevent then just keep as is
      if (updatedCard.id !== current.id) {
        return [...accumulator, current];
      }

      // if the card is the same one, then just edit
      return [...accumulator,updatedCard]
    }, [])

    setList(updatedCardInPlace);
  }

  // date.getTime
  const sort = () => {
    const sorted = [...list].sort(function (a,b) {
      if (a.date.getTime() > b.date.getTime()) return 1;
      if (a.date.getTime() < b.date.getTime()) return -1;
      return 0;
    });

    setList(sorted)
  };

  const removeOne = (x) => {
    setList(list.filter((listElement) => listElement.id !== x.id));
  };

  // const titleUp = (data) => {
  //   setTitle(data);
  // };
  // const contentUp = (data) => {
  //   setContent(data);
  // };


  return (
    <div>
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      <button className="button" onClick={addOne}>
        Add New Idea
      </button>
      <button className="button">
        Sort
      </button>
      <div className="board">
        {list.map((item) => {
          return (
            <ul className="ul" key={item.id}>
              <Idea
                card={item}
                // titleUp={titleUp}
                // contentUp={contentUp}
                cancel={removeOne}
                editCard={editCard}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
