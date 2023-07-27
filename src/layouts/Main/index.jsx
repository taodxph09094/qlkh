import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  DashboardOutlined,
  DeliveredProcedureOutlined,
  OrderedListOutlined,
  PicCenterOutlined,
  UserOutlined,
  WindowsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { RiBillLine } from "react-icons/ri";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const items = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    route: "/dashboard",
  },
  {
    key: "2",
    icon: <OrderedListOutlined />,
    label: "Quản lý sản phẩm",
    route: "/products",
  },
  {
    key: "3",
    icon: <DeliveredProcedureOutlined />,
    label: "Đơn vị phân phối",
    route: "/supplier",
  },
  {
    key: "6",
    icon: <PicCenterOutlined />,
    label: "Thương hiệu",
    route: "/brands",
  },
  {
    key: "8",
    icon: <WindowsOutlined />,
    label: "Danh mục sản phẩm",
    route: "/categories",
  },
  {
    key: "4",
    icon: <RiBillLine />,
    label: "Quản lý đơn hàng",
    route: "/orders",
  },
  {
    key: "5",
    icon: <UserOutlined />,
    label: "Quản lý tài khoản",
    route: "/users",
  },
  {
    key: "7",
    icon: <SettingOutlined />,
    label: "Cấu hình trang",
    route: "/setting",
  },
];
const Main = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <h2 style={{ color: "white" }}>Quan ly kho</h2>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        /> */}
      </Header>
      <Layout>
        <Sider
          width={210}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ minHeight: 850 }}
          >
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.route}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              //   minHeight: 817,
              background: colorBgContainer,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Main;
