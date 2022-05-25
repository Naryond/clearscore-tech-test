import { useState, useEffect } from "react";
import "./Style.css";
import Idea from "./Idea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addOne = () => {
    const newCard = {
      title: title,
      content: content,
      date: new Date(),
      id: uuidv4(),
    };
    setList([...list, newCard]);
  };

  const removeOne = (x) => {
    setList(list.filter((listElement) => listElement.id !== x.id));
  };

  const titleUp = (data) => {
    setTitle(data);
  };
  const contentUp = (data) => {
    setContent(data);
  };

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
                titleUp={titleUp}
                contentUp={contentUp}
                cancel={removeOne}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
