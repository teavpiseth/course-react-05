

function Cup({num}) {
  
  // Bad: changing a preexisting variable!

  return <h2>Tea cup for guest #{num}</h2>;
}

// Tea cup for guest 1
// Tea cup for guest 2
// Tea cup for guest 3

export default function TeaSet() {
  return (
    <>
      <Cup num={1} />
      <Cup num={2} />
      <Cup num={3}/>
    </>
  );
}
