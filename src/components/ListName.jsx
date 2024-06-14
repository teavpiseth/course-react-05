/* eslint-disable react/prop-types */
import React from "react";

export default function ListName({ isPacked, name, image, profession, handleDeletePeople, idx }) {
  return (
    <div className="item flex text-left mb-5">
      
      <div className="mr-3">
        <img src={image} />
      </div>
      <input type="text"></input>
      name: {name} {isPacked ? "✔" : ""}
      <br/>
      <br/>
      profession: {profession}
      <button onClick={()=>handleDeletePeople(idx)} >Delete</button>
    </div>
  );
}
