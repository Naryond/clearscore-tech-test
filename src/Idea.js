import { useState } from "react";
import "./Style.css";

const Idea = ({ cancel, card, editCard }) => {
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

    if (edit) {
      const updateCard = {
        id: card.id,
        date: new Date(),
        title,
        content
      }

      editCard(updateCard);
    }
  };

  const erase = () => {
    cancel(card);
  };

  return (
    <div>
      <div className="internalBox">
        {edit ? (
          <div>
            <input type="text" value={title} onChange={getTitle} />
            <input type="text" value={content} onChange={getContent} />
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
