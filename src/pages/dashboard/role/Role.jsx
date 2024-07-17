import React, { useState } from "react";
import { Button, Col, Row, Space, Table } from "antd";
import { useRole } from "./hooks/useRole";
import moment from "moment";
import StringUtil from "@/utils/string";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useDebounce from "@/hooks/useDebound";
import AddNewRole from "./AddNewRole";
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
