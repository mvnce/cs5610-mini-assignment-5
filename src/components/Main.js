import '../styles/Main.css';

import React, { useState } from 'react';

import Square from './Square';

export default function Main() {

  const [isActives, setIsActives] = useState([false, false, false, false]);
  const [count, setCount] = useState(countIsActives(isActives));

  function handler(index, newIsActive) {
    const newIsActives = isActives;
    newIsActives[index] = newIsActive;

    setIsActives(newIsActives);
    setCount(countIsActives(isActives));
  }

  function countIsActives(isActivesArray) {
    return isActivesArray.filter(element => element === true).length;
  }

  return (
    <div className="square-container">
      <h1 className="count-text"> Count: {count}</h1>
      <div className="square-column">
        <div className="square-row">
          <Square handler={handler} index={0} isActive={isActives[0]} />
          <Square handler={handler} index={1} isActive={isActives[1]} />
        </div>
        <div className="square-row">
          <Square handler={handler} index={2} isActive={isActives[2]} />
          <Square handler={handler} index={3} isActive={isActives[3]} />
        </div>
      </div>
    </div>
  );
}
