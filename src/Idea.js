import { useState } from 'react';
import blockNote from "./blockNotes.jpg";
import "./Idea.css";
import './Button.css'

const Idea = ({ cancel, card}) => {
  const [title, setTitle] = useState('');

  return (
    <div className="singleBox">
      <img src={blockNote} alt="notes" />
      <input className="inputTitle" type="text" defaultValue="New Idea"  />
      <input className="inputIdea" type="text" />
      <p>{card.title}</p>
      <button className='button regolation' onClick={() => cancel(card)}>Remove</button>
    </div>
  );
};

export default Idea;
