import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handledCh} type="text" value={props.inputData} />
      <button onClick={props.additionItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
