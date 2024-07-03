import { Space, Tag } from "antd";
import { useEffect, useState } from "react";
import Employee from "../Employee";
import EmployeeService from "../EmployeeService";

export function useEmployee() {
  // const data = [];
  const [data, setData] = useState([]);

  useEffect(() => {
    EmployeeService.getList().then((result) => {
      // console.log(result);
      setData(result.list);
    });
  }, []);
  return {
    data,
  };
}
