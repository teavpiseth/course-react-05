import { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import EmployeeService from "./EmployeeService";
import { status } from "@/utils/constant";
import moment from "moment";
import LocalStorage from "@/utils/LocalStorage";

const AddNewEmployee = ({ isOpen, setIsOpen, gender }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState([]);

  const createBy = LocalStorage.getUser()?.id;
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  function onFinish(value) {
    console.log(value);
    const formData = new FormData();
    let _value = {
      ...value,
      dob: value.dob.format("YYYY-MM-DD"),
      createBy: createBy,
    };

    for (const key in _value) {
      formData.append(key, _value[key]);
    }
    EmployeeService.create(formData).then((res) => {
      console.log(res);
    });
  }
  function onFinishFailed() {}

  async function getRoleList() {
    const res = await EmployeeService.getRoleList();
    // console.table(res);
    setRole(res.list);
  }

  // const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // setImage(e.target.files[0]);
      form.setFieldsValue({ image: e.target.files[0] });
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (role.length === 0) {
        getRoleList();
      }
    }
  }, [isOpen, role]);

  // const customFormat = (value) => moment(value).format("DD/MM/YYYY");
  return (
    <>
      <Modal
        title="Add New"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
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
            <Input />
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
              {status?.map((obj) => {
                return (
                  <Select.Option key={obj.value} value={obj.value}>
                    {obj.name}
                  </Select.Option>
                );
              })}
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
              {gender?.map((obj) => {
                return (
                  <Select.Option key={obj.value} value={obj.value}>
                    {obj.label}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            label="Role"
            name="roleId"
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
            name="tel"
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
            {<input type="file" onChange={handleImageChange} />}
            <div>
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ maxWidth: "300px" }}
                />
              )}
            </div>
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
