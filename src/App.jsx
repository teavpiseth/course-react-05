import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description, { MemorizeImage as ImageTest } from "./components/Image";
import Image1 from "./images/user/man/51.jpg"
import Image2 from "./images/user/man/29.jpg"
import Image3 from "./images/user/man/60.jpg"
import React from "react";
function App() {
  const [count, setCount] = useState(0);
  function Image({ name, image }) {
    console.log("image component inside app");
    return <>Image</>
  }

  const MemorizedImage = React.memo(Image);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ImageTest name="Seng" image={Image1} />
      <ImageTest name="Ratha" image={Image2} />
      <ImageTest name="Piseth" image={Image3} />
      <Description />
      <MemorizedImage/>
    </>
  );
}

export default App;
