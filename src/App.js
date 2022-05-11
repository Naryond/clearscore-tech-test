import "./App.css";
import blockNote from "./blockNotes.jpg";

function App() {
  return (
    <div className="boxes">
      <header className="header">
        <h1 className="h1">Our Ideas</h1>
      </header>
      <div className="externalBox">
        <div className="singleBox">
          <img src={blockNote} alt="notes" />
        </div>
        <div className="singleBox">
          <img src={blockNote} alt="notes" />
        </div>
      </div>
    </div>
  );
}

export default App;
