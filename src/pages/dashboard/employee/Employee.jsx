import React from "react";
import { Space, Table, Tag } from "antd";
import { useEmployee } from "./hooks/useEmployee";
// {
//   "Id": 5,
//   "RoleId": 1,
//   "FirstName": "Seng",
//   "LastName": "Ratha test",
//   "Gender": 0,
//   "Dob": "2000-01-02T05:00:00.000Z",
//   "Tel": "0121111",
//   "Email": "test@gmail.com",
//   "Address": "51h Phnom penh",
//   "Status": 1,
//   "Image": "image-1711442466416-737201407.jpg",
//   "Salary": "0.00",
//   "Password": "$2b$10$eyCZi0TNk1bMGnXRkzQn.ukwd467CCkT3TuRjeJoCVlKzsi4p.Qga",
//   "CreateAt": "2024-02-14T04:14:52.000Z",
//   "CreateBy": 1,
//   "UpdateAt": "2024-04-18T19:58:39.000Z",
//   "UpdateBy": 8,
//   "RoleName": "Admin",
//   "password": ""
// }
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
  },
  {
    title: "Dob",
    dataIndex: "Dob",
    key: "Dob",
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
    render: (data) => <>{data}</>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const Employee = () => {
  const { data } = useEmployee();
  return <Table columns={columns} dataSource={data} />;
};
export default React.memo(Employee);
