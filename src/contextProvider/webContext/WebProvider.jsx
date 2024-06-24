import { useEffect, useState } from "react";
import { WebContext } from "./WebContext";
import axios from "axios";

export const WebProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  function handleAlert() {
    alert("here is parent APP component");
  }
  return (
    <WebContext.Provider
      value={{
        categoryList,
        handleAlert: handleAlert,
        setCategoryList: (value) => setCategoryList(value),
      }}
    >
      {children}
    </WebContext.Provider>
  );
};
