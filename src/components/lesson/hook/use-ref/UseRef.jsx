import React, { useEffect, useRef, useState } from "react";
import UseRefInput from "./UseRefInput";

function UseRef() {
  const count = useRef(0);
  const inputRef = useRef(null);
  const [red, setRed] = useState(true);
  const listDataRef = useRef(null);

  function countHandle() {
    count.current = count.current + 1;
    // alert(count.current);
    setRed(!red);
  }

  useEffect(() => {
    count.current = 1;
    setRed(!red);
    // inputRef.current.focus();
    // inputRef.current.style.borderRadius = "10px";

    const childElements = listDataRef.current.querySelector(".list-27");
    childElements.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const ListData = [];

  for (let index = 0; index < 30; index++) {
    ListData.push(
      <div className={`list-${index}`} key={index}>
        content line {index}
      </div>
    );
  }
  return (
    <div style={{ color: red ? "red" : "black" }} onClick={countHandle}>
      count {count.current}
      <br />
      <br />
      {/* <input type="text" id="myInput" /> */}
      <div ref={listDataRef}>{ListData}</div>
      {/* <UseRefInput ref={inputRef} /> */}
    </div>
  );
}

export default React.memo(UseRef);
