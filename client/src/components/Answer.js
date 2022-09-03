import React from "react";

function Answer(props) {
  return (
    <button className="btn" onClick={props.goNextPage}>
      {props.text}
    </button>
  );
}

export default Answer;
