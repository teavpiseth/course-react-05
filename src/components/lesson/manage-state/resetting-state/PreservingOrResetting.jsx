/* eslint-disable react/prop-types */
import { useState } from 'react';

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      style={{border: `1px solid ${isFancy ? 'red' : 'blue'}`}}
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}


export default function PreservingOrResetting() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div style={{border: "1px solid #ccc"}}>
      {isFancy ? (
        <Counter isFancy={true} />
      ) : (
        <p>Use the fancy styling</p>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
