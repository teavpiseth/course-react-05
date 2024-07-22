import React, { useState } from "react";
import { Button, Col, Row, Space, Table } from "antd";
import { useRole } from "./hooks/useRole";
import moment from "moment";
import StringUtil from "@/utils/string";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useDebounce from "@/hooks/useDebound";
import AddNewRole from "./AddNewRole";
import { redirect } from "react-router";
import { Link } from "react-router-dom";
const { Search } = Input;

const Role = () => {
  const {
    data,
    gender,
    isOpenAddNew,
    fetchData,
    setIsOpenAddNew,
    deleteHandle,
    pagination,
  } = useRole();

  const debounce = useDebounce();

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Code",
      dataIndex: "Code",
      key: "Code",
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      render: (data) => <>{StringUtil.getNameStatus(data)}</>,
    },
    {
      title: "Create At",
      key: "CreateAt",
      dataIndex: "CreateAt",
      render: (data) => <>{moment(data).format("DD/MM/YYYY")}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/dashboard/add-role-permission?id=${record.Id}&name=${record.Name}`}
          >
            <Button>Add Role Permission</Button>
          </Link>

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
      <AddNewRole
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
export default React.memo(Role);
