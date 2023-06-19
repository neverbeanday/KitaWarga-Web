import React, { useState } from "react";
// Style
import "./index.scss";
// Component
import { HeadingDashboard } from '../../../components/atoms';

// thirdpart
import { Layout, Card, Breadcrumb, Typography, Table, Divider, Row, Col } from "antd";
const { Text } = Typography;

const Rangkuman = () => {
  const [loading, setLoading] = useState(true);
  const [pemasukan, setPemasukan] = useState([
    "Reza Adhiguna|09/03/2023",
    "Ramdani Putra|08/03/2023",
    "Dhimas Peto|06/03/2023",
    "Hertianto Putri|03/03/2023",
    "Tejo|01/03/2023",
    
  ]);
  const [pengeluaran, setPengeluaran] = useState([
    "Beli Air Minum Pos|09/03/2023",
    "Beli Token Listrik Pos|08/03/2023",
    "Kasbon Ucup|06/03/2023",
    "Sumbangan Untuk Acara RW|03/03/2023",
    "Beli Karambol|01/03/2023",
    
  ]);
  const handleSetLoading = () => {
    setLoading(false);
  };
  setTimeout(handleSetLoading, 3000);

  const pemasukanColumns = [
    {
      title: "",
      dataIndex: "name",
      key: "name",
      render: text => (
          <Text>{text}</Text>
        )
    },
    {
      title: "",
      dataIndex: "date",
      key: "date",
      render: text => (
          <Text>{text}</Text>
        )
    },
  ];

  const pemasukanDataSource = pemasukan
    ? pemasukan.map((item, index) => {
        const [name, date] = item.split("|");
        // const formattedDate = moment(date, 'DD/MM').format('DD MMM');
        // const cleanedDescription = description.replace(/\s*CR$/, "");
        if (index < 5) {
          return {
            key: index,
            // date: formattedDate,
            name,
            date,
            // description: cleanedDescription,
            // amount,
          };
        }
      })
    : null;

    const pengeluaranColumns = [
      {
        title: "",
        dataIndex: "name",
        key: "name",
        render: text => (
          <Text>{text}</Text>
        )
      },
      {
        title: "",
        dataIndex: "date",
        key: "date",
        render: text => (
          <Text>{text}</Text>
        )
      },
    ];
  
    const pengeluaranDataSource = pengeluaran
      ? pengeluaran.map((item, index) => {
          const [name, date] = item.split("|");
          // const formattedDate = moment(date, 'DD/MM').format('DD MMM');
          // const cleanedDescription = description.replace(/\s*CR$/, "");
          if (index < 5) {
            return {
              key: index,
              // date: formattedDate,
              name,
              date,
              // description: cleanedDescription,
              // amount,
            };
          }
        })
      : null;

  return (
    <Layout className="dashboard-kita-warga-layout-rangkuman-wrapper">
      <Breadcrumb
        className="dashboard-kita-warga-layout-rangkuman-breadcrumb"
        items={[
          {
            title: "Dasbor",
          },
          {
            title: "Dasbor Rangkuman",
          },
        ]}
      />
      <Divider />
      <Layout className="dashboard-kita-warga-layout-rangkuman">
      <HeadingDashboard
            heading="Rangkuman"
            content="Sebuah solusi modern untuk pengelolaan data dan pelayanan terkait warga. Aplikasi ini memudahkan pengumpulan dan aksesibilitas informasi identitas, demografi, dan kegiatan warga secara terorganisir. Dengan mengikuti kebijakan privasi dan perlindungan data, aplikasi ini membantu meningkatkan efisiensi dalam administrasi pemerintahan dan menyediakan layanan publik yang lebih baik bagi masyarakat."
          />
        {/* <Title level={2} className="dashboard-kita-warga-layout-rangkuman-title">
          Rangkuman
        </Title> */}
        <Layout className="dashboard-kita-warga-layout-rangkuman-content">
          <Row align={"middle"} justify={"center"}>
            <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                title="Total Saldo Kas Saat Ini"
                bordered={true}
                loading={loading}
                className="dashboard-kita-warga-layout-rangkuman-content-card"
              >
                Rp. 19.009.000
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                title="Total Pemasukan Bulan ini"
                bordered={true}
                loading={loading}
                className="dashboard-kita-warga-layout-rangkuman-content-card"
              >
                Rp. 3.898.000
              </Card>
            </Col>
            <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                title="Total Pengeluaran Bulan ini"
                bordered={true}
                loading={loading}
                className="dashboard-kita-warga-layout-rangkuman-content-card"
              >
                Rp. 2.898.000
              </Card>
            </Col>
            <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                title="Kasbon"
                bordered={true}
                loading={loading}
                className="dashboard-kita-warga-layout-rangkuman-content-card"
              >
                Rp. 1.000.000
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Table
                columns={pemasukanColumns}
                dataSource={pemasukanDataSource}
                loading = {loading}
                className="dashboard-kita-warga-layout-rangkuman-content-table"
                title={() => (
                  <Layout>
                    <Text className="table-title-wording">Pemasukan Terbaru</Text>
                    <Text className="content-total-credit">View Detail</Text>
                  </Layout>
                )}
              />
            </Col>
            <Col span={12}>
            <Table
                columns={pengeluaranColumns}
                dataSource={pengeluaranDataSource}
                loading = {loading}
                className="dashboard-kita-warga-layout-rangkuman-content-table"
                title={() => (
                  <Layout>
                    <Text className="table-title-wording">Pengeluaran Terbaru</Text>
                    <Text className="content-total-credit">View Detail</Text>
                  </Layout>
                )}
              />
            </Col>
          </Row>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Rangkuman;
