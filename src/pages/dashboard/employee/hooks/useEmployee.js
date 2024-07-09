import { Space, Tag } from "antd";
import { useEffect, useRef, useState } from "react";
import Employee from "../Employee";
import EmployeeService from "../EmployeeService";

export function useEmployee() {
  // const data = [];
  const gender = useRef([]);
  const [data, setData] = useState([]);
  const [isOpenAddNew, setIsOpenAddNew] = useState(false);

  const fetchData = async (search = "") => {
    const result = await EmployeeService.getList(search);
    setData(result.list);
    gender.current = result.genderMaster;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    gender,
    fetchData,
    isOpenAddNew,
    setIsOpenAddNew,
  };
}
