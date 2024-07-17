import React, { useState } from "react";
import { Badge, Button, Col, Row, Space, Table } from "antd";
import { useAccesskey } from "./hooks/useAccesskey";
import moment from "moment";
import StringUtil from "@/utils/string";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useDebounce from "@/hooks/useDebound";
import AddNewAccessKey from "./AddNewAccessKey";
const { Search } = Input;

const Accesskey = () => {
  const {
    data,
    gender,
    isOpenAddNew,
    fetchData,
    setIsOpenAddNew,
    deleteHandle,
    pagination,
  } = useAccesskey();

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
    { title: "Parent Name", dataIndex: "ParentName", key: "ParentName" },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      render: (data) => (
        <>
          {
            <Badge
              count={StringUtil.getNameStatus(data)}
              showZero
              color={data?.toString() === "1" ? "green" : "#faad14"}
            />
          }
        </>
      ),
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
      <AddNewAccessKey
        dataEdit={dataEdit}
        isOpen={isOpenAddNew}
        setIsOpen={setIsOpenAddNew}
        gender={gender.current}
        fetchList={fetchData}
        parentList={data}
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
export default React.memo(Accesskey);
