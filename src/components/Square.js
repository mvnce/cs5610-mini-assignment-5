import '../styles/Square.css';

import React, { useState } from 'react';

export default function Square(props) {

  let [isActive, setIsActive] = useState(props.isActive);

  function toggle() {
    const newIsActive = !isActive;

    setIsActive(newIsActive);
    props.handler(props.index, newIsActive);
  }

  return (
    <div className={`square ${isActive ? "square-active" : "square-inactive"}`} onClick={toggle}></div>
  );
}
