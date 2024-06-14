import React, { useState } from "react";
import Image1 from "@/images/user/woman/44.jpg";
import Image2 from "@/images/user/woman/60.jpg";
import Image3 from "@/images/user/woman/71.jpg";
import MemorizeCard from "../../../card/Card";

const sculptureList = [
  {
    name: "Piseth",
    artist: "Marta Colvin Andrade",
    description:
      "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculptureList, an homage to neurosurgery, is one of her most recognizable public art pieces.",
    url: Image1,
    alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips.",
  },
  {
    name: "Floralis Genérica",
    artist: "Eduardo Catalano",
    description:
      "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
    url: Image2,
    alt: "A gigantic metallic flower sculptureList with reflective mirror-like petals and strong stamens.",
  },
  {
    name: "Eternal Presence",
    artist: "John Woodrow Wilson",
    description:
      'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: Image3,
    alt: "The sculptureList depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
  },
];

export default function ComponentMemory() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleClick() {
    if (index >= sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  console.log("re-render");
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <br />
      <hr />
      <h2>
        <i>{sculptureList[index].name} </i>
        by {sculptureList[index].artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        style={{ margin: "auto" }}
        src={sculptureList[index].url}
        alt={sculptureList[index].alt}
      />
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Hide" : "Show"} Description
      </button>
      {showMore && <p>{sculptureList[index].description}</p>}
      {/* <MemorizeCard />
      <MemorizeCard />
      <MemorizeCard /> */}
      <input type="text" style={{ margin: "auto", border: "1px solid black" }}/>
    </div>
  );
}
