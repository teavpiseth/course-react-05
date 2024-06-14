import React from "react";
import FilterTodo from "./FilterTodo";

export default function UseMemoComponent() {
  const [red, setRed] = React.useState(true);

  const [status, setStatus] = React.useState("progress");

  return (
    <div>
      <button onClick={() => setRed(!red)}>Change border color Style to {!red ? "red" : "blue"}</button>
      <br />
      Filter
      <button onClick={() => setStatus("progress")}>Progress</button>
      <button onClick={() => setStatus("pending")}>Pending</button>
      <button onClick={() => setStatus("done")}>Done</button>
      <button onClick={() => setStatus("all")}>All</button>
      <FilterTodo filterBy={status} red={red} />
    </div>
  );
}
