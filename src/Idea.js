import { useState } from "react";
import "./Idea.css";
import "./Button.css";

const Idea = ({ cancel, card }) => {
  const [title, setTitle] = useState("My Idea");
  const [content, setContent] = useState("I think...");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getContent = (e) => {
    setContent(e.target.value);
  };

  const erase = () => cancel(card);

  return (
    <div>
      <input
        type="text"
        defaultValue={title}
        onChange={getTitle}
      />
      <input
        type="text"
        defaultValue={content}
        onChange={getContent}
      />
      <div className="singleBox">
        <b>{title}</b>
        <br />
        <br />
        {content}
      </div>
      <button className="button regolation" onClick={erase}>
        Remove
      </button>
    </div>
  );
};

export default Idea;
