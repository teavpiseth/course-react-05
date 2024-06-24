import { createContext, useContext } from "react";

export const WebContext = createContext(null);

export const useWebContext = () => {
  const { categoryList, handleAlert, setCategoryList } = useContext(WebContext);
  return { categoryList, handleAlert, setCategoryList };
};
