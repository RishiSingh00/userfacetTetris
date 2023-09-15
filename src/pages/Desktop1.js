import "./Desktop1.css";
const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <div className="header">
        <img className="header-child" alt="" src="/undefined.png" />
        <img className="header-item" alt="" src="/undefined1.png" />
        <img className="uf-logo-1-icon" alt="" src="/undefined2.png" />
        <div className="nextword">
          <div className="next-word">Next word:</div>
          <div className="and">AND</div>
        </div>
        <div className="score">
          <img className="vector-icon" alt="" src="/undefined3.png" />
          <div className="score1">Score:</div>
          <div className="div">0</div>
        </div>
      </div>
      <div className="footer">
        <img className="footer-child" alt="" src="/undefined4.png" />
        <img className="footer-item" alt="" src="/undefined5.png" />
        <div className="footer-inner" />
        <button className="hintbutton" id="hintButton">
          <div className="hintbutton-child" />
          <div className="hint">HINT</div>
          <img className="lightbulb-1-icon" alt="" src="/undefined6.png" />
        </button>
        <div className="rectangle-div" />
        <button className="startbutton" id="startButton">
          <div className="startbutton-child" />
          <div className="startbutton-item" />
          <div className="startbutton-inner" />
        </button>
        <img className="timericon" alt="" src="/undefined7.png" />
        <h4 className="h4" id="timer">
          4:16:42
        </h4>
      </div>
    </div>
  );
};

export default Desktop1;
