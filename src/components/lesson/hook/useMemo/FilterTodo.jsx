/* eslint-disable react/prop-types */
import React, { useCallback, useMemo } from "react";
import ListTodoCom from "./ListTodoCom";
import { todoList } from "./todoData";

const FilterTodo = React.memo(function FilterTodo({ filterBy, red }) {
  const [list, setList] = React.useState(todoList);
  const todoData = useMemo(() =>  {
    return filterBy === "all" ? list : list.filter((item) => item.status === filterBy);
  },[filterBy, list])
    

    // console.log(todoData, "----")
  const onUpdateDoneHandle =  useCallback(
    (id) => {
      let _list = [...list];
      _list[id].status = "done";
      setList(_list);
    },
    [list]
  )
  
 
  return (
    <div
      style={{
        border: red ? "5px solid red" : "5px solid blue",
        borderRadius: 10,
        padding: "10px",
      }}
    >
      <ListTodoCom list={todoData} onUpdateDoneHandle={onUpdateDoneHandle}  />
    </div>
  );
});

export default FilterTodo;
