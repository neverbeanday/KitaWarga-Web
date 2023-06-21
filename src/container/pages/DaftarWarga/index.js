/** @format */

import React, { useEffect, useState } from "react";
// Style
import "./index.scss";
// Icon
import { PlusOutlined } from "@ant-design/icons";
// Component
import { HeadingDashboard } from "../../../components/atoms";
// Thirdpart
import axios from "axios";
import Moment from "react-moment";
import { v1 as uuidv1 } from "uuid";
import {
  Table,
  Button,
  Popconfirm,
  Layout,
  Typography,
  Breadcrumb,
  Divider,
  Input,
  InputNumber,
  Modal,
  Form,
  Radio,
  Select,
} from "antd";
const { Text } = Typography;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

const DaftarWarga = () => {
  // State Data List
  const [data, setData] = useState();
  // State load Data after Add/Update/Delete
  const [loadData, setLoadData] = useState(false);
  // Loading Table
  const [loading, setLoading] = useState(false);
  // State Search
  const [searchText, setSearchText] = useState("");
  // show/hide Modal
  const [visibleModalAdd, setVisibleModalAdd] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  // State getKey
  const [keyData, setKeyData] = useState(null);

  //useEffect get Data List Table
  useEffect(() => {
    getListWarga();
  }, [loadData]);

  // Table (dataSource & Columns)
  const wargaDataSource = data
    ? data.map((item, index) => {
        const joinAlamat = `${item.alamat_perumahan} Blok ${item.blok_rumah} No.${item.nomor_rumah} RT ${item.id_rt}/ RW ${item.id_rw}`;
        return {
          key: index,
          namaWarga: item.nama_warga,
          alamat: joinAlamat,
          namaPerumahan: item.nama_perumahan,
          email: item.email,
          jenisKelamin: item.jenis_kelamin,
          noHandphone: item.nomor_hp,
          statusPernikahan: item.status_pernikahan,
          joinDate: item.createdAt,
        };
      })
    : null;
  const wargaColumns = [
    {
      title: "Nama Warga",
      dataIndex: "namaWarga",
      key: "namaWarga",
      width: "13%",
      // fixed: 'left',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
      width: "20%",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Nama Perumahan",
      dataIndex: "namaPerumahan",
      key: "namaPerumahan",
      width: "13%",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "15%",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "jenisKelamin",
      key: "jenisKelamin",
      width: "10%",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Nomor Handphone",
      dataIndex: "noHandphone",
      key: "noHandphone",
      width: "10%",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Status Pernikahan",
      dataIndex: "statusPernikahan",
      key: "statusPernikahan",
      width: "10%",
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: "Tanggal Bergabung",
      dataIndex: "joinDate",
      key: "joinDate",
      width: "10%",
      render: (text) => <Moment format="DD MMMM YYYY">{text}</Moment>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      // fixed: 'right',
      width: "10%",
      render: (_, record) => (
        <Layout className="table-actions">
          <Button onClick={() => showModalEdit(record)}>Edit</Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record)}>
            <Button>Delete</Button>
          </Popconfirm>
        </Layout>
      ),
    },
  ];
  // Filter Data Table for Search
  const filteredData = wargaDataSource
    ? wargaDataSource.filter(
        (item) =>
          item.namaWarga.toLowerCase().includes(searchText.toLowerCase()) ||
          item.alamat.toLowerCase().includes(searchText.toLowerCase()) ||
          item.namaPerumahan.toLowerCase().includes(searchText.toLowerCase()) ||
          item.email.toLowerCase().includes(searchText.toLowerCase()) ||
          item.jenisKelamin.toLowerCase().includes(searchText.toLowerCase()) ||
          item.noHandphone.toLowerCase().includes(searchText.toLowerCase()) ||
          item.statusPernikahan.toLowerCase().includes(searchText.toLowerCase()) ||
          item.joinDate.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];
  // Modal (Show & Hide)
  const showModalAdd = () => {
    setVisibleModalAdd(true);
  };
  const showModalEdit = (record) => {
    console.log(record,'data record')
    console.log(data[record.key],'data record key')
    setKeyData(record.key);
    setVisibleModalEdit(true);
  };
  const handleCancel = () => {
    console.log("test");
    setVisibleModalAdd(false);
    setVisibleModalEdit(false);
  };
  // Handle Add Data Warga
  const handleFormSubmitAdd = (values) => {
    console.log(values, "value"); // Do something with the form values
    setLoadData(false);
    addListWarga(values);
  };
  const addListWarga = (data) => {
    console.log(data, "proses tambah data");
    const headers = {
      "x-access-token": localStorage.getItem("token"),
    };

    const payload = {
      id_warga: uuidv1(),
      nama_warga: data.name,
      id_perumahan: localStorage.getItem("id_perumahan"),
      blok_rumah: data.blokRumah,
      nomor_rumah: data.nomorRumah,
      email: data.email,
      nomor_hp: data.nomorHp,
      is_rt: data.pengurusRt,
      is_rw: data.pengurusRw,
      id_rt: `${data.rt}`,
      id_rw: `${data.rw}`,
      jenis_kelamin: data.jenisKelamin,
      status_pernikahan: data.statusPernikahan,
    };

    axios
      .post("http://api.kitawarga.com:3000/api/admin/insert/warga", payload, { headers })
      .then((response) => {
        if (response.status === 200) {
          console.log(response, "response Add");
          setLoadData(true);
          setVisibleModalAdd(false); // Close the modal after form submission
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Handle Edit Data Warga
  const handleFormSubmitEdit = (values) => {
    console.log(values, "value"); // Do something with the form values
    setLoadData(false);
    updateListWarga(values);
  };
  const updateListWarga = (data) => {
    console.log(data, "ini cek data update");
    const headers = {
      "x-access-token": localStorage.getItem("token"),
    };

    const payload = {
      id_warga: data.id_warga,
      nama_warga: data.nama_warga,
      id_perumahan: data.id_perumahan,
      blok_rumah: data.blok_rumah,
      nomor_rumah: data.nomor_rumah,
      email: data.email,
      nomor_hp: data.nomor_hp,
      is_rt: data.is_rt,
      is_rw: data.is_rw,
      id_rt: data.id_rt,
      id_rw: data.id_rw,
      jenis_kelamin: data.jenis_kelamin,
      status_pernikahan: data.status_pernikahan,
    };

    axios
      .post("http://api.kitawarga.com:3000/api/admin/update/warga", payload, { headers })
      .then((response) => {
        if (response.status === 200) {
          console.log(response, "response update");
          setLoadData(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Handle Delete Data Warga
  const handleDelete = (record) => {
    // Handle delete action
    setLoadData(false);
    deleteListWarga(data[record.key]);
    console.log("Delete:", record);
  };
  const deleteListWarga = (data) => {
    const headers = {
      "x-access-token": localStorage.getItem("token"),
    };

    const payload = {
      id_warga: data.id_warga,
    };

    axios
      .post("http://api.kitawarga.com:3000/api/admin/delete/warga", payload, { headers })
      .then((response) => {
        if (response.status === 200) {
          console.log(response, "response delete");
          setLoadData(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Get List Data
  const getListWarga = () => {
    const headers = {
      "x-access-token": localStorage.getItem("token"),
    };

    const payload = {
      id_perumahan: localStorage.getItem("id_perumahan"),
      param: 1,
      nama: "",
    };

    axios
      .post("http://api.kitawarga.com:3000/api/admin/list/warga", payload, { headers })
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout className="dashboard-kita-warga-layout-detail-data-user-wrapper">
      <Breadcrumb
        className="dashboard-kita-warga-layout-detail-data-user-breadcrumb"
        items={[
          {
            title: "Dasbor",
          },
          {
            title: "Dasbor Daftar Warga",
          },
        ]}
      />
      <Divider />
      <Layout className="dashboard-kita-warga-layout-detail-data-user">
        <HeadingDashboard
          heading="Daftar Warga"
          content="Informasi lengkap tentang penduduk atau warga suatu wilayah yang dikumpulkan dan disimpan. Ini mencakup identitas, demografi, kesehatan, dan kegiatan warga untuk membantu pengelolaan data dan pelayanan publik yang efisien. Aplikasi ini memastikan kepatuhan terhadap kebijakan privasi dan perlindungan data, sehingga memberikan gambaran komprehensif mengenai warga dalam satu platform yang terintegrasi."
        />
        <Layout className="dashboard-kita-warga-layout-detail-data-user-content">
          <Layout className="dashboard-kita-warga-layout-detail-data-user-content-header">
            <Button
              className="dashboard-kita-warga-layout-detail-data-user-content-header-button-add"
              type="primary"
              icon={<PlusOutlined />}
              onClick={showModalAdd}
            >
              Tambah Warga
            </Button>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Layout>
          <Table
            className="dashboard-kita-warga-layout-detail-data-user-content-table"
            columns={wargaColumns}
            dataSource={filteredData}
            loading={loading}
            scroll={{
              x: 2000,
            }}
          />
        </Layout>
      </Layout>
      <Modal
        title="Tambah Data Warga"
        centered
        open={visibleModalAdd}
        onCancel={handleCancel}
        closable={true} // Disable the close button in the header
        maskClosable={false} // Disable closing the modal by clicking outside
        destroyOnClose // Optional: Destroy the modal when it is closed
        footer={null}
      >
        <Form {...formItemLayout} onFinish={handleFormSubmitAdd}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please enter your Email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nomorHp"
            label="Nomor HP"
            rules={[{ required: true, message: "Please enter your Nomor HP" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="jenisKelamin"
            label="Jenis Kelamin"
            rules={[
              {
                required: true,
                message: "Please pick an Jenis Kelamin",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="Laki - Laki">Laki - Laki</Radio.Button>
              <Radio.Button value="Perempuan">Perempuan</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="statusPernikahan"
            label="Status Pernikahan"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select your country!",
              },
            ]}
          >
            <Select placeholder="Pilih Status Pernikahan">
              <Option value="Belum Kawin">Belum Kawin</Option>
              <Option value="Kawin">Kawin</Option>
              <Option value="Cerai Hidup">Cerai Hidup</Option>
              <Option value="Cerai Mati">Cerai Mati</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="blokRumah"
            label="Blok Rumah"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nomorRumah"
            label="Nomor Rumah"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rt"
            label="RT"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="rw"
            label="RW"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="pengurusRt"
            label="Pengurus RT"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Radio.Group>
              <Radio.Button value={true}>Iya</Radio.Button>
              <Radio.Button value={false}>Tidak</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="pengurusRw"
            label="Pengurus RW"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Radio.Group>
              <Radio.Button value={true}>Iya</Radio.Button>
              <Radio.Button value={false}>Tidak</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Ubah Data Warga"
        centered
        open={visibleModalEdit}
        onCancel={handleCancel}
        closable={true} // Disable the close button in the header
        maskClosable={false} // Disable closing the modal by clicking outside
        destroyOnClose // Optional: Destroy the modal when it is closed
        footer={null}
      >
        <Form
          {...formItemLayout}
          onFinish={handleFormSubmitEdit}
          initialValues={{
            name: `${data && data[keyData] ? data[keyData].nama_warga : ""}`,
            email: `${data && data[keyData] ? data[keyData].email : ""}`,
            nomorHp: `${data && data[keyData] ? data[keyData].nomor_hp : ""}`,
            jenisKelamin: `${data && data[keyData] ? data[keyData].jenis_kelamin : ""}`,
            statusPernikahan: `${data && data[keyData] ? data[keyData].status_pernikahan : ""}`,
            blokRumah: `${data && data[keyData] ? data[keyData].blok_rumah : ""}`,
            nomorRumah: `${data && data[keyData] ? data[keyData].nomor_rumah : ""}`,
            rt: `${data && data[keyData] ? data[keyData].id_rt : ""}`,
            rw: `${data && data[keyData] ? data[keyData].id_rw : ""}`,
            pengurusRt: data && data[keyData] ? data[keyData].is_rt : "",
            pengurusRw: data && data[keyData] ? data[keyData].is_rw : "",


          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please enter your Email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nomorHp"
            label="Nomor HP"
            rules={[{ required: true, message: "Please enter your Nomor HP" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="jenisKelamin"
            label="Jenis Kelamin"
            rules={[
              {
                required: true,
                message: "Please pick an Jenis Kelamin",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="Laki - Laki">Laki - Laki</Radio.Button>
              <Radio.Button value="Perempuan">Perempuan</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="statusPernikahan"
            label="Status Pernikahan"
            // hasFeedback
            rules={[
              {
                required: true,
                message: "Please select your country!",
              },
            ]}
          >
            <Select placeholder="Pilih Status Pernikahan">
              <Option value="Belum Kawin">Belum Kawin</Option>
              <Option value="Kawin">Kawin</Option>
              <Option value="Cerai Hidup">Cerai Hidup</Option>
              <Option value="Cerai Mati">Cerai Mati</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="blokRumah"
            label="Blok Rumah"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nomorRumah"
            label="Nomor Rumah"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rt"
            label="RT"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="rw"
            label="RW"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="pengurusRt"
            label="Pengurus RT"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Radio.Group>
              <Radio.Button value={true}>Iya</Radio.Button>
              <Radio.Button value={false}>Tidak</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="pengurusRw"
            label="Pengurus RW"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Radio.Group>
              <Radio.Button value={true}>Iya</Radio.Button>
              <Radio.Button value={false}>Tidak</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default DaftarWarga;
