import blockNote from "./blockNotes.jpg";
import "./Idea.css";
import './Button.css'

const Idea = (props) => {
  return (
    <div className="singleBox">
      <img src={blockNote} alt="notes" />
      <input className="inputTitle" type="text" defaultValue="New Idea" />
      <input className="inputIdea" type="text" />
      <button className='button regolation' onClick={props.cancel}>Remove</button>
    </div>
  );
};

export default Idea;
