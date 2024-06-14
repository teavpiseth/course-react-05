/* eslint-disable react/prop-types */
import React from "react";

const ListTodoCom = React.memo(function ListTodoCom({
  list,
  onUpdateDoneHandle,
}) {
  console.log("rerender ListTodo Component");
  // for (let index = 0; index < 5000000000; index++) {}
  return (
    <div style={{ textAlign: "left" }}>
      {list.map((item, index) => {
        return (
          <p key={index}>
            <span style={{ width: "50px", display: "inline-block" }}>
              {item.status === "done" ? "✓" : ""}
              {index + 1}
            </span>{" "}
            {item.name}
            <span
              style={{
                marginLeft: "10px",
                backgroundColor: item.status === "done" ? "green" : "black",
                color: "#fff",
                padding: "3px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => onUpdateDoneHandle(index)}
            >
              {item.status}
            </span>
          </p>
        );
      })}
    </div>
  );
});

export default ListTodoCom;
