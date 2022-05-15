import { useState } from 'react';
import blockNote from "./blockNotes.jpg";
import "./Idea.css";
import './Button.css'

const Idea = ({ cancel, card}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const getTitle = (e) => {
    setTitle({ title: e.target.value});
  }
  const getContent = (e) => {
    setContent({ content: e.target.value});
  }

  return (
    <div className="singleBox">
      <img className='img' src={blockNote} alt="notes" />
      <input className="inputTitle" type="text" defaultValue={title} onChange={getTitle} />
      <input className="inputIdea" type="text" defaultValue={content} onChange={getContent}/>
      <p>{card.title}</p>
      <button className='button regolation' onClick={() => cancel(card)}>Remove</button>
    </div>
  );
};

export default Idea;
