import { useState } from "react";
import "./Style.css";

const Idea = ({ cancel, card }) => {
  const [title, setTitle] = useState("My Idea");
  const [content, setContent] = useState("I think...");
  const [time, setTime] = useState(card.date);
  const [edit, setEdit] = useState(false);

  const getTitle = (e) => {
    setTitle(e.target.value);
    setTime(new Date());
  };

  const getContent = (e) => {
    setContent(e.target.value);
    setTime(new Date());
  };

  const editMode = () => {
    setEdit(!edit);
  };

  // const data = { title: title, content: content, date: time, id: card.id };

  // localStorage.setItem(data.id, JSON.stringify({ data }));

  const erase = () => {
    cancel(card);
    localStorage.removeItem(card.id);
  };

  return (
    <div>
      <div className="internalBox">
        {edit ? (
          <div>
            <input type="text" defaultValue={title} onChange={getTitle} />
            <input type="text" defaultValue={content} onChange={getContent} />
          </div>
        ) : (
          <div>
            <b>{title}</b>
            <br />
            <br />
            {content}
            <div className="time">
              {time.toLocaleDateString()}
              <br />
              {time.toLocaleTimeString()}
            </div>
          </div>
        )}
      </div>
      <button className="button" onClick={editMode}>
        {edit ? "Save" : "Edit"}
      </button>
      <button className="button bottom" onClick={erase}>
        Remove
      </button>
    </div>
  );
};

export default Idea;
