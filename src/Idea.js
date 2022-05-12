import blockNote from "./blockNotes.jpg";
import "./Idea.css";

const Idea = (props) => {
  return (
    <div className="singleBox">
      <img src={blockNote} alt="notes" />
      <input className="inputTitle" type="text" defaultValue="New Idea" />
      <input className="inputIdea" type="text" />
    </div>
  );
};

export default Idea;
