import React from "react";

function ProgressBar(props) {
  //질문이 총12개 => ( 총너비 / 총스템 ) * 현재스텝 = 퍼센트
  const percent = (480 / 5) * props.step;

  return (
    <div className="progress-bar">
      <div className="percent" style={{ width: percent }}></div>
      <div></div>
    </div>
  );
}

export default ProgressBar;
