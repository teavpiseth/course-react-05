import React, { useState } from "react";
import { Button, Checkbox, Col, Collapse, Row, Select } from "antd";
import { useAddRolePermission } from "./hooks/useAddRolePermission";
import { SettingOutlined } from "@ant-design/icons";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AddRolePermission = () => {
  const { listGroup, name, handleChecked, onChangeItem, submitHandle } =
    useAddRolePermission();
  const onChangeCollapse = (key) => {
    // console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const [expandIconPosition, setExpandIconPosition] = useState("start");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  function getList(item) {
    const li = [];
    li.push(
      <li key={item.Code}>
        <Checkbox
          checked={handleChecked(item.Code)}
          onChange={(e) => onChangeItem(item.Code, e.target.checked)}
        >
          {item.Name}
        </Checkbox>
      </li>
    );
    if (item.Children?.length > 0) {
      li.push(getPermissionList(item.Children));
    }
    return li;
  }
  function getPermissionList(permissionList) {
    return (
      <>
        {permissionList?.map((item) => {
          return getList(item);
        })}
      </>
    );
  }
  function getItem(item) {
    // console.log(permissionList)
    return [
      {
        key: item.Code,
        label: (
          <>
            {item.Name}{" "}
            <Checkbox
              onChange={(e) => onChangeItem(item.Code, e.target.checked)}
              checked={handleChecked(item.Code)}
            />
          </>
        ),
        children: (
          <div>
            <ul>{getPermissionList(item.Children)}</ul>
          </div>
        ),
      },
    ];
  }
  return (
    <>
      <h2
        style={{
          background: "rgb(193 205 225)",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        Role: <span style={{ fontSize: 25 }}>{name}</span>
      </h2>
      <Row gutter={10}>
        {listGroup?.map((item) => {
          return (
            <Col key={item.Code} span={8}>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChangeCollapse}
                expandIconPosition={expandIconPosition}
                items={getItem(item)}
              />
            </Col>
          );
        })}
      </Row>
      <Button onClick={() => submitHandle()} color="primary" className="mt-5">
        Submit
      </Button>
    </>
  );
};
export default React.memo(AddRolePermission);
