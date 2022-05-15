import { useState } from "react";
import blockNote from "./blockNotes.jpg";
import "./Idea.css";
import "./Button.css";

const Idea = ({ cancel, card }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const getTitle = (e) => {
    setTitle({ title: e.target.value });
  };
  const getContent = (e) => {
    setContent({ content: e.target.value });
  };

  const erase = () => cancel(card);

  return (
    <div className="singleBox">
      <img className="img" src={blockNote} alt="notes" />
      <input
        className="inputTitle"
        type="text"
        defaultValue={title}
        onChange={getTitle}
      />
      <input
        className="inputIdea"
        type="text"
        defaultValue={content}
        onChange={getContent}
      />
      <button className="button regolation" onClick={erase}>
        Remove
      </button>
    </div>
  );
};

export default Idea;
