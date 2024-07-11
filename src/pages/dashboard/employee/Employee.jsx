import React, { useState } from "react";
import { Button, Col, Row, Space, Table, Tag } from "antd";
import { useEmployee } from "./hooks/useEmployee";
import moment from "moment";
import StringUtil from "@/utils/string";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useDebounce from "@/hooks/useDebound";
import AddNewEmployee from "./AddNewEmployee";
const { Search } = Input;

const Employee = () => {
  const { data, gender, fetchData, isOpenAddNew, setIsOpenAddNew } =
    useEmployee();
  //  useDebounce();
  const debounce = useDebounce();
  // console.log(useDebounce(() => "test"));
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
            onClick={() => console.log(_, record)}
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
          <Button type="primary" onClick={() => setIsOpenAddNew(true)}>
            Add New
          </Button>
        </Col>
      </Row>
      <AddNewEmployee
        dataEdit={dataEdit}
        isOpen={isOpenAddNew}
        setIsOpen={setIsOpenAddNew}
        gender={gender.current}
      />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default React.memo(Employee);
