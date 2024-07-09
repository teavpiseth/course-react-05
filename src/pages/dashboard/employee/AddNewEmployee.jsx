import { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import EmployeeService from "./EmployeeService";

const AddNewEmployee = ({ isOpen, setIsOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState([]);
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  function onFinish(value) {
    console.log(value);
  }
  function onFinishFailed() {}

  async function getRoleList() {
    const res = await EmployeeService.getRoleList();
    // console.table(res);
    setRole(res.list);
  }
  useEffect(() => {
    if (isOpen) {
      getRoleList();
    }
  }, [isOpen]);
  return (
    <>
      <Modal
        title="Add New"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: "Please input your Status!",
              },
            ]}
          >
            <Select placeholder="Select Status" allowClear>
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please input your gender!",
              },
            ]}
          >
            <Select placeholder="Select Gender" allowClear>
              <Select.Option value="Active">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Please input your role!",
              },
            ]}
          >
            <Select placeholder="Select role" allowClear>
              {role?.map((obj) => {
                return (
                  <Select.Option key={obj.Id} value={obj.Id}>
                    {obj.Name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            label="Date of birth"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please input your DOB!",
              },
            ]}
          >
            <DatePicker></DatePicker>
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your phone!",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input></Input>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item label="Salary" name="salary">
            <Input></Input>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Image" name={"image"} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddNewEmployee;
