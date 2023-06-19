import React, { useState, useRef } from "react";
// Style
import "./index.scss";
// Icon
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  FileSearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { kasbonIcon, pengeluaranIcon, pemasukanIcon, daftarWargaIcon } from "../../../assets/images";
// Component
import Login from "../Login";
import Rangkuman from "../Rangkuman";
import DetailDataUser from "../DetailDataUser";
import Pemasukan from "../Pemasukan";
import Pengeluaran from "../Pengeluaran";
import Kasbon from "../Kasbon";
import DaftarWarga from "../DaftarWarga";
import DaftarUser from "../DaftarUser";
// thirdpart
import { Button, Layout, Menu, Typography, Image } from "antd";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const contentRef = useRef(null);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
    if (contentRef.current) {
      if (collapsed) {
        contentRef.current.classList.remove("collapsed-content");
      } else {
        contentRef.current.classList.add("collapsed-content");
      }
    }
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      "Rangkuman",
      "1",
      <Link to="/dashboard/rangkuman">
        <PieChartOutlined />
      </Link>,
      null,
      null
    ),
    getItem(
      "Detail",
      "2",
      <Link to="/dashboard/detail">
        <FileSearchOutlined />
      </Link>,
      null,
      null
    ),
    getItem(
      "Pemasukan",
      "3",
      <Link to="/dashboard/pemasukan">
        <Image src={pemasukanIcon} preview={false} />
      </Link>,
      null,
      null
    ),
    getItem(
      "Pengeluaran",
      "4",
      <Link to="/dashboard/pengeluaran">
        <Image src={pengeluaranIcon} preview={false} />
      </Link>,
      null,
      null
    ),
    getItem(
      "Kasbon",
      "5",
      <Link to="/dashboard/kasbon">
        <Image src={kasbonIcon} preview={false} />
      </Link>,
      null,
      null
    ),
    getItem(
      "Daftar Warga",
      "6",
      <Link to="/dashboard/daftar-warga">
        <Image src={daftarWargaIcon} preview={false} />
      </Link>,
      null,
      null
    ),
    {
      type: "divider",
    },
    getItem(
      "Daftar User",
      "7",
      <Link to="/dashboard/daftar-user">
        <SettingOutlined />
      </Link>,
      null,
      null
    ),
  ];

  return (
    <Layout className="dashboard-kita-warga">
      <Header className="dashboard-kita-warga-header">
        <Title level={2}>KitaWarga</Title>
      </Header>
      <Layout className="dashboard-kita-warga-layout">
        <Sider trigger={null} collapsed={collapsed} className="dashboard-kita-warga-sider">
          <Button
            className="dashboard-kita-warga-sider-trigger"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleToggleCollapse}
          />
          <Menu mode="vertical" items={items} defaultSelectedKeys={["1"]} className="dashboard-kita-warga-sider-menu" />
        </Sider>
        <Content
          id="dashboard-kita-warga-layout-content"
          className="dashboard-kita-warga-layout-content"
          ref={contentRef}
        >
          {/* <Breadcrumb
            items={[
              {
                href: "",
                title: <Link to="/">Home</Link>,
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: <Link to="/">Home</Link>,
              },
            ]}
          /> */}
          <Routes>
            <Route exact path="/" element={<Rangkuman />} />
            <Route path="/rangkuman" element={<Rangkuman />} />
            <Route path="/detail" element={<DetailDataUser />} />
            <Route path="/pemasukan" element={<Pemasukan />} />
            <Route path="/pengeluaran" element={<Pengeluaran />} />
            <Route path="/kasbon" element={<Kasbon />} />
            <Route path="/daftar-warga" element={<DaftarWarga />} />
            <Route path="/daftar-user" element={<DaftarUser />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
