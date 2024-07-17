import { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import RoleService from "./AccesskeyService";
import { status } from "@/utils/constant";
import moment from "moment";
import LocalStorage from "@/utils/LocalStorage";
import StringUtil from "@/utils/string";

const AddNewAccessKey = ({
  isOpen,
  setIsOpen,
  dataEdit,
  fetchList,
  parentList,
}) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState([]);

  const createBy = LocalStorage.getUser()?.Id;

  const isEdit = Object.keys(dataEdit)?.length > 0;

  function onFinish(value) {
    let _value = {
      ...value,
      ...(isEdit === false && { createBy: createBy }),
      ...(isEdit === true && { updateBy: createBy }),
    };

    if (isEdit) {
      // const data = value;
      const data = {};
      for (const key in value) {
        if (value[key] || value[key] === 0) {
          data[key] = value[key];
        }
      }
      data["id"] = form.getFieldValue("id");
      console.log(form.getFieldValue("id"), form.getFieldValue());
      // console.log(data, form.getFieldsValue());
      setIsLoading(true);
      RoleService.update(data).then((res) => {
        setIsLoading(false);
        if (res) {
          setIsOpen(false);
          fetchList();
        }
      });
    } else {
      setIsLoading(true);
      RoleService.create(_value).then((res) => {
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
    const res = await RoleService.getRoleList();
    // console.table(res);
    setRole(res.list);
  }

  const resetFields = () => {
    form.resetFields();
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
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Code"
            name="code"
            rules={[
              {
                required: true,
                message: "Please input code!",
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
          <Form.Item label="Parent" name="parentId">
            <Select showSearch placeholder="Select Status" allowClear>
              {parentList?.map((obj) => {
                return (
                  <Select.Option key={obj.Id} value={obj.Id}>
                    {obj.Name}
                  </Select.Option>
                );
              })}
            </Select>
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
export default AddNewAccessKey;
