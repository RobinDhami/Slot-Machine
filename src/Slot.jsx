import React from "react";
import "./App.css";

const SlotM = (props) => {
  return (
    <div className="slot_inner">
      <h1>
        {props.x} {props.y} {props.z}
      </h1>
      {(props.x === props.y && props.y === props.z) ? (
        <h1>Hurray!! You Won 🎉🎉🎉</h1>
      ) : (
        <h1> Sorry !! You Lost  😢😢😢</h1>
      )}
    </div>
  );
};

export default SlotM;
