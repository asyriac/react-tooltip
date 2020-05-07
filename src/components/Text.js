import React from "react";

export default function Text(props) {
  const onMouseOver = () => {
    props.toggle();
  };

  const onMouseOut = () => {
    props.toggle();
  };
  return (
    <div>
      <h1 onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        Hover over me!
      </h1>
    </div>
  );
}
