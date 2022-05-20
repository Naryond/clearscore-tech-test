import { useState } from "react";
import "./Style.css";

const Idea = ({ cancel, card }) => {
  const [title, setTitle] = useState("My Idea");
  const [content, setContent] = useState("I think...");
  const [time, setTime] = useState(card.date);

  const getTitle = (e) => {
    setTitle(e.target.value);
    setTime(new Date());
  };

  const getContent = (e) => {
    setContent(e.target.value);
    setTime(new Date());
  };

  const erase = () => cancel(card);

  return (
    <div>
      <input type="text" defaultValue={title} onChange={getTitle} />
      <input type="text" defaultValue={content} onChange={getContent} />
      <div className="internalBox">
        <b>{title}</b>
        <br />
        <br />
        {content}
        <div className='time'>{time.toLocaleTimeString()}</div>
      </div>
      <button className="button bottom" onClick={erase}>
        Remove
      </button>
    </div>
  );
};

export default Idea;
