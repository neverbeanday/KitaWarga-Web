import React, { useEffect, useState } from "react";
// Style
import "./index.scss";
// Component
import { HeadingDashboard } from "../../../components/atoms";
// Thirdpart
import qs from "qs";
import { Table, Button, Popconfirm, Layout, Typography, Breadcrumb, Divider } from "antd";
const { Text } = Typography;

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const Pengeluaran = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const handleEdit = (record) => {
    // Handle edit action
    console.log("Edit:", record);
  };

  const handleDelete = (record) => {
    // Handle delete action
    console.log("Delete:", record);
  };

  const columns = [
    {
      title: "Nama & Nomor Rumah",
      dataIndex: "name",
      sorter: true,
      render: (name) => <Text>{name.first} {name.last}</Text>,
      width: "30%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
      width: "30%",
      render: text => (<Text>{text}</Text>)
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "30%",
      render: text => (<Text>{text}</Text>)
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Layout className="table-actions">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record)}>
            <Button>Delete</Button>
          </Popconfirm>
        </Layout>
      ),
    },
  ];

  return (
    <Layout className="dashboard-kita-warga-layout-detail-data-user-wrapper">
      <Breadcrumb
        className="dashboard-kita-warga-layout-detail-data-user-breadcrumb"
        items={[
          {
            title: "Dasbor",
          },
          {
            title: "Dasbor Pengeluaran",
          },
        ]}
      />
      <Divider />
      <Layout className="dashboard-kita-warga-layout-detail-data-user">
        <HeadingDashboard
          heading="Pengeluaran"
          content="Informasi lengkap tentang penduduk atau warga suatu wilayah yang dikumpulkan dan disimpan. Ini mencakup identitas, demografi, kesehatan, dan kegiatan warga untuk membantu pengelolaan data dan pelayanan publik yang efisien. Aplikasi ini memastikan kepatuhan terhadap kebijakan privasi dan perlindungan data, sehingga memberikan gambaran komprehensif mengenai warga dalam satu platform yang terintegrasi."
        />
        <Layout className="dashboard-kita-warga-layout-detail-data-user-content">
          <Table
            className="dashboard-kita-warga-layout-detail-data-user-content-table"
            columns={columns}
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
          />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Pengeluaran;
