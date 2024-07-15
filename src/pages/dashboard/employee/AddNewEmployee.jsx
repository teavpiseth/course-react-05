import { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import EmployeeService from "./EmployeeService";
import { status } from "@/utils/constant";
import moment from "moment";
import LocalStorage from "@/utils/LocalStorage";
import StringUtil from "@/utils/string";

const AddNewEmployee = ({ isOpen, setIsOpen, gender, dataEdit, fetchList }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState([]);

  const createBy = LocalStorage.getUser()?.id;

  const isEdit = Object.keys(dataEdit)?.length > 0;

  function onFinish(value) {
    const formData = new FormData();
    let _value = {
      ...value,
      dob: value.dob.format("YYYY-MM-DD"),
      ...(isEdit === false && { createBy: createBy }),
      ...(isEdit === true && { updateBy: createBy }),
    };
    const { image, ...rest } = _value;
    for (const key in rest) {
      formData.append(key, _value[key]);
    }

    // if (typeof image != "string") {
    formData.append("image", image);
    // }

    if (isEdit) {
      formData.append("id", dataEdit?.Id);
      setIsLoading(true);
      EmployeeService.update(formData).then((res) => {
        setIsLoading(false);
        if (res) {
          setIsOpen(false);
          fetchList();
        }
      });
    } else {
      setIsLoading(true);
      EmployeeService.create(formData).then((res) => {
        setIsLoading(false);
        if (res) {
          setIsOpen(false);
          fetchList();
        }
      });
    }
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

  const resetFields = () => {
    form.resetFields();
    setPreviewUrl("");
  };
  useEffect(() => {
    resetFields();
    if (isOpen) {
      if (role.length === 0) {
        getRoleList();
      }
    }
    if (isEdit) {
      form.setFieldsValue(
        StringUtil.pascalToCamel({ ...dataEdit, dob: moment(dataEdit.Dob) })
      );
    }
    if (form.getFieldValue("image")) {
      setPreviewUrl(form.getFieldValue("image"));
    }
  }, [isOpen, role, dataEdit]);

  return (
    <>
      <Modal
        title="Add New"
        open={isOpen}
        footer={false}
        onCancel={() => setIsOpen(false)}
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
          {!dataEdit?.Id && (
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          )}

          <Form.Item label="Image" name={"image"} rules={[{ required: true }]}>
            {<input type="file" onChange={handleImageChange} />}
            <div>
              {previewUrl && (
                <img
                  src={
                    previewUrl && dataEdit?.Id
                      ? "https://piseth.site/api/get-image/" + previewUrl
                      : previewUrl
                  }
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
            <Button
              disabled={isLoading}
              type="primary"
              htmlType="submit"
              style={{ textAlign: "right" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddNewEmployee;
