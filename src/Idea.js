import { useState } from "react";
import "./Style.css";

const Idea = ({ cancel, card, editCard }) => {
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);
  const [time, setTime] = useState(card.date);
  const [edit, setEdit] = useState(false);

  const getTitle = (e) => {
    setTitle(e.target.value);
    setTime(new Date().toLocaleString());
  };

  const getContent = (e) => {
    setContent(e.target.value);
    setTime(new Date().toLocaleString());
  };

  const editMode = () => {
    setEdit(!edit);

    if (edit) {
      const updateCard = {
        id: card.id,
        date: new Date().toLocaleString(),
        title: title,
        content: content,
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
            <input type="text" value={content} onChange={getContent} maxlength="140"/>
          </div>
        ) : (
          <div>
            <b>{card.title}</b>
            <br />
            <br />
            {card.content}
            <div className="time">
              <br />
              {time}
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
