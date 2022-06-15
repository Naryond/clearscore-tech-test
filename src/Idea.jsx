import React from 'react';
import { useState } from 'react';
import './Style.css';
import PropTypes from 'prop-types';

const Idea = ({ cancel, card, editCard }) => {
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);
  const [time, setTime] = useState(card.date);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState('');

  const getTitle = (e) => {
    setTitle(e.target.value);
    setTime(new Date().toLocaleString());
  };

  const getContent = (e) => {
    setContent(e.target.value);
    setTime(new Date().toLocaleString());
    setError(e.target.value.length);
    let howLong = e.target.value.length;
    if (howLong === 140) {
      setError('Max length reached');
    }
    if (howLong >= 130 && howLong < 140) {
      setError('Max length almost reached');
    }
    if (howLong < 130) {
      setError('');
    }
  };

  const editMode = () => {
    setEdit(!edit);

    if (edit) {
      const updateCard = {
        id: card.id,
        date: new Date().toLocaleString(),
        title: title,
        content: content,
      };

      editCard(updateCard);
    }
  };

  const erase = () => {
    cancel(card);
  };
  
Idea.propTypes = {
  card: PropTypes.object,
  cancel: PropTypes.func,
  editCard: PropTypes.func,
};


  return (
    <div>
      <div className="internalBox">
        {edit ? (
          <div>
            <input type="text" value={title} onChange={getTitle} />
            <input
              type="text"
              value={content}
              onChange={getContent}
              maxLength="140"
            />
            <br />
            <span className="error">{error}</span>
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
        {edit ? 'Save' : 'Edit'}
      </button>
      <button className="button bottom" onClick={erase}>
        Remove
      </button>
    </div>
  );
};

export default Idea;
