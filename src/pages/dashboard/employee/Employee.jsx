import React, { useState } from "react";
import { Button, Col, Row, Space, Table } from "antd";
import { useEmployee } from "./hooks/useEmployee";
import moment from "moment";
import StringUtil from "@/utils/string";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useDebounce from "@/hooks/useDebound";
import AddNewEmployee from "./AddNewEmployee";
const { Search } = Input;

const Employee = () => {
  const {
    data,
    gender,
    isOpenAddNew,
    fetchData,
    setIsOpenAddNew,
    deleteHandle,
    pagination,
  } = useEmployee();

  const debounce = useDebounce();
  const columns = [
    {
      title: "First Name",
      dataIndex: "FirstName",
      key: "FirstName",
    },
    {
      title: "Last Name",
      dataIndex: "LastName",
      key: "LastName",
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
      render: (data) => (
        <>{gender.current?.find((item) => item.value === data)?.label}</>
      ),
    },
    {
      title: "Dob",
      dataIndex: "Dob",
      key: "Dob",
      render: (data) => <>{moment(data).format("YYYY/MM/DD")}</>,
    },
    {
      title: "Role",
      dataIndex: "RoleName",
      key: "Role",
    },
    {
      title: "Tel",
      dataIndex: "Tel",
      key: "Tel",
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      render: (data) => <>{StringUtil.getNameStatus(data)}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              setDataEdit(record);
              setIsOpenAddNew(true);
            }}
            style={{ color: "blue", cursor: "pointer" }}
          />
          <DeleteOutlined
            onClick={() => deleteHandle(record)}
            style={{ color: "red", cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  const [dataEdit, setDataEdit] = useState({});

  return (
    <>
      <Row className="!justify-between">
        <Col>
          <Search
            placeholder="Search name"
            onChange={(e) => debounce(() => fetchData(e.target.value), 500)}
            loading={false}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => {
              setIsOpenAddNew(true);
              setDataEdit({});
            }}
          >
            Add New
          </Button>
        </Col>
      </Row>
      <AddNewEmployee
        dataEdit={dataEdit}
        isOpen={isOpenAddNew}
        setIsOpen={setIsOpenAddNew}
        gender={gender.current}
        fetchList={fetchData}
      />

      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          ...pagination.current,
          onChange: (value) => {
            // setPagination({ ...pagination, current: value });
            pagination.current = { ...pagination.current, current: value };
            fetchData();
          },
        }}
      />
    </>
  );
};
export default React.memo(Employee);
