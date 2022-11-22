import React, { useEffect, useState } from "react";
import ApiService from "@/src/services/client";
import Spinner from "@/src/components/loader3";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Table,
  Space,
  message,
  Popconfirm,
  Card,
  Row,
  Col,
} from "antd";

const { useForm } = Form;
const DataPenduduk = () => {
  const [dataPenduduk, setDataPenduduk] = useState([]);
  const [form] = useForm();
  const [dataInput, setDataInput] = useState({
    nik: "",
    nama: "",
    alamat: "",
  });
  const [editId, setEditId] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      render: (value, data, i) => i + 1,
    },
    {
      title: "Nik",
      dataIndex: "nik",
    },
    {
      title: "Nama",
      dataIndex: "nama",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      render: (value, data) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="dashed"
            onClick={() => handleEdit(data)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => handleDel(data.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const confirm = (e) => {
    console.log(e);
    message.success("uda diapus");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("gajadi diapus");
  };

  const fetchDataPenduduk = () => {
    ApiService.request({
      method: "get",
      url: "/person",
    }).then((res) => {
      setDataPenduduk(res.data.data);
      setTimeout(() => {
        setLoading(false);
      }, 1700);
    });
  };

  const postDataPenduduk = () => {
    setLoading(true);
    const { nik, nama, alamat } = form.getFieldsValue();
    ApiService.request({
      method: "post",
      url: "/person",
      data: {
        nik: nik,
        nama: nama,
        alamat: alamat,
      },
    }).then((res) => {
      fetchDataPenduduk(res.data.data);
    });
  };

  const putDataPenduduk = (id) => {
    setLoading(true);
    const { nik, nama, alamat } = form.getFieldsValue();
    ApiService.request({
      method: "put",
      url: `/person/${id}`,
      data: {
        nik: nik,
        nama: nama,
        alamat: alamat,
      },
    }).then((res) => {
      fetchDataPenduduk(res.data.data);
    });
  };
  const delDataPenduduk = (id) => {
    setLoading(true);
    ApiService.request({
      method: "delete",
      url: `/person/${id}`,
    }).then((res) => {
      fetchDataPenduduk(res.data.data);
    });
  };

  const handleDataInput = (e) => {
    console.log(e.target.value);
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (editId !== undefined) {
      putDataPenduduk(editId);
    } else {
      postDataPenduduk();
      // return [...id, dataInput]
    }
    form.resetFields();
    setEditId(undefined);
  };

  const handleDel = (id) => {
    delDataPenduduk(id);
    message.success("uda diapus");
  };

  const handleEdit = (data) => {
    setEditId(data.id);
    form.setFieldsValue(data);
  };

  useEffect(() => {
    fetchDataPenduduk();
  }, []);

  return !loading ? (
    <div
      style={{
        marginTop: "3rem",
      }}
    >
      <Row justify={"center"} gutter={[40,40]}>
        <Col span={22}>
          <Card
            title="Default size card"
            style={{
              width: "100%",
            }}
            // extra={<a href="#">More</a>}
          >
            <Form
              form={form}
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "3rem",
              }}
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 18,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="NIK"
                type="text"
                name="nik"
                value={dataInput.nik}
                placeholder="Masukkan Nik"
                onChange={handleDataInput}
                rules={[
                  {
                    min: 16,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Nama :"
                type="text"
                name="nama"
                value={dataInput.nama}
                placeholder="Masukkan Nama"
                onChange={handleDataInput}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Alamat :"
                type="text"
                name="alamat"
                value={dataInput.alamat}
                placeholder="Masukkan Alamat"
                onChange={handleDataInput}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 12,
                  span: 16,
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#50C550",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={22}>
          <Table rowKey="id" columns={columns} dataSource={dataPenduduk} />
        </Col>
      </Row>
    </div>
  ) : (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
};
export default DataPenduduk;
