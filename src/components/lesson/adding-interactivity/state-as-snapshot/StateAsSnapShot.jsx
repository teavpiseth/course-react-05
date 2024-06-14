import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  function performOperation(a, b, callback) {
    const result = a + b;
    callback(result);
  }
  
  function logResult(res) {
    console.log("The result is:", res);
  }
  
  // performOperation(5, 3, (n)=>{ console.log(n, "here callback")});

  const [changeColorTitle, setChangeColorTitle] = useState(false)

  console.log("re-render");

  function handleClick() {
    setNumber(number+ 5); //0+1=1
    setTimeout(() => {
      alert(number)
    },5000)
  }
  return (
    <>
      <h1 style={{ color: changeColorTitle ? "red" : "blue" }}>{number}</h1>
      <button onClick={handleClick}>+3</button>
    </>
  )
}


