import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function WrapRouter() {
    const [current, setCurrent] = useState("home");

  const items = [
    {
      label: "Home",
      key: "home",
      icon: <MailOutlined />,
    },

    {
      key: "updateState",
      label: <Link to="/update-state-array">Update State</Link>,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    // setCurrent(e.key);
  };
  return (
    <div>
        <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Outlet />
    </div>
  )
}
