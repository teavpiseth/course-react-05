import React, { useState } from "react";
import { Checkbox, Col, Collapse, Row, Select } from "antd";
import { useAddRolePermission } from "./hooks/useAddRolePermission";
import { SettingOutlined } from "@ant-design/icons";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AddRolePermission = () => {
  const { listGroup } = useAddRolePermission();
  const onChange = (key) => {
    console.log(key);
  };

  console.log({ listGroup });
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
  ];

  const [expandIconPosition, setExpandIconPosition] = useState("start");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  function getList(item) {
    const li = [];
    li.push(
      <li key={item.Code}>
        <Checkbox checked={true} onChange={() => console.log("check")}>
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
        label: item.Name,
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
      <Row gutter={10}>
        {listGroup?.map((item) => {
          return (
            <Col key={item.Code} span={8}>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition={expandIconPosition}
                items={getItem(item)}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default React.memo(AddRolePermission);
