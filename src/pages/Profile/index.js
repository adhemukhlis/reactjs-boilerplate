import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ApiService from "@/src/services/clientBlog";
import URLS from "@/src/enums/urls";
import { Table, Button, Card } from "antd";
import "./index.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    data: [],
    meta: {},
  });
  const navigate = useNavigate();
  const authLogout = () => {
    localStorage.setItem("token", "");
    setTimeout(() => {
      navigate(URLS.AUTH);
    }, 2000);
  };

  const [size, setSize] = useState("large");

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      render: (value, data, i) => i + 1,
    },
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      render: (value, data) => (
        <Link to={`${URLS.PROFILE}/${value}`}>{value}</Link>
      ),
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    ApiService.request({
      url: "/users",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setUser((prev) => ({ ...prev, name: res.data.name }));
    });

    ApiService.request({
      url: "/users/getall",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setUser((prev) => ({
        ...prev,
        data: res.data.data,
        meta: res.data.meta,
      }));
    });
  }, []);

  return (
    <div>
      <Card title="Profile Page">
        <Table
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
          rowKey="id"
          columns={columns}
          dataSource={user.data}
        />
        <Button
          shape="round"
          size={size}
          style={{
            background:
              "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          }}
          type="primary"
        >
          Data Penduduk
        </Button>
        <Button
          shape="round"
          size={size}
          style={{
            background:
              "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          }}
          type="primary"
          onClick={authLogout}
        >
          Logout
        </Button>
      </Card>
    </div>
  );
};
export default Profile;
