import { Modal, Space, Tag } from "antd";
import { useEffect, useRef, useState } from "react";

import RoleService from "../RoleService";
import RouteUtil from "@/utils/RouteUtil";

export function useRole() {
  // const data = [];
  const gender = useRef([]);
  const [data, setData] = useState([]);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isOpenAddNew, setIsOpenAddNew] = useState(false);
  const pagination = useRef({
    pageSize: 5,
    current: 1,
    total: 7,
  });

  const fetchData = async (search = "") => {
    const queryString = {
      pageSize: pagination.current.pageSize,
      page: pagination.current.current,
      search: search,
    };
    const queryUrl = RouteUtil.objectToQueryString(queryString);
    const result = await RoleService.getList(queryUrl);
    pagination.current.total = result.totalRecode;
    setData(result.list?.map((item) => ({ ...item, key: item.Id })));

    gender.current = result.genderMaster;
  };

  function deleteEmployee(id) {
    RoleService.delete(id).then((res) => {
      if (res) {
        fetchData();
      }
    });
  }

  function deleteHandle(record) {
    const Id = record.Id;

    Modal.confirm({
      title: "Delete!",
      content: "Are you sure?",
      onOk() {
        deleteEmployee(Id);
      },
    });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return {
    data,
    gender,
    fetchData,
    isOpenAddNew,
    setIsOpenAddNew,
    deleteEmployee,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
    deleteHandle,
    pagination,
  };
}
