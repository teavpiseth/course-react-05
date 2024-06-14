import React, { useEffect } from "react";

export default function Readmore() {
  // setInterval(() => {
  //   console.log("Read more")
  // }, 1000)

 


  useEffect(()=> {
    const console_ = setInterval(() => {
      console.log("Read more");
    }, 1000);

    return () => clearInterval(console_);
  }, []);

  return (
    <div>
      <p>
        Read more Read more Read more Read more Read more Read more Read more
        Read more Read more Read more Read more Read more
      </p>
    </div>
  );
}
