import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Navigate, Outlet, useNavigate } from "react-router";
import LocalStorage from "@/utils/LocalStorage";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "/dashboard", <PieChartOutlined />),
  getItem("Customer", "/dashboard/customer", <DesktopOutlined />),
  getItem("Employee", "/dashboard/employee", <DesktopOutlined />),
  getItem("Product", "/dashboard/product", <UserOutlined />, [
    getItem("Category", "/dashboard/product/category"),
    getItem("Product", "/dashboard/product/list"),
  ]),
  getItem("System", "/dashboard/system", <TeamOutlined />, [
    getItem("Role List", "/dashboard/role-list"),
    getItem("Add Role Permission", "/dashboard/add-role-permission"),
    getItem("Access Key", "/dashboard/accesskey"),
  ]),
  getItem("Logout", "/login", <FileOutlined />),
];

const MasterLayoutDashboard = React.memo(function MasterLayoutDashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // useLayoutEffect(() => {
  //   if (!LocalStorage.getUser()) {
  //     return navigate("/login");
  //   }
  // }, []);
  useEffect(() => {
    if (!LocalStorage.getUser()) {
      navigate("/login");
    }
  }, []);

  if (!LocalStorage.getUser()) {
    return <div></div>;
  }

  function onChangeMenuHandle(value) {
    if (value.key?.includes("login")) {
      LocalStorage.clearUser();
    }
    navigate(value.key);
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(value) => onChangeMenuHandle(value)}
        />
      </Sider>
      <Layout>
        <div style={{ backgroundColor: "#f5f5f5", padding: "10px 20px" }}>
          User Name: {LocalStorage.getUser().FirstName}{" "}
          {LocalStorage.getUser().LastName}
        </div>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
});
export default MasterLayoutDashboard;
