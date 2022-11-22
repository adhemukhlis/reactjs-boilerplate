import React from "react";
import { Descriptions, Row, Col, Card } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "@/src/components/loader3";
import ApiService from "@/src/services/clientBlog";

const DetailUser = () => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    ApiService.request({
      url: `/users/username/${username}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      setUser(res.data.data);
      setLoading(false);
    });
  }, []);
  
  return !loading ? (
    <Row>
      <Col>
        <Card>
          <Descriptions title="User Info">
            <Descriptions.Item label="ID">{user?.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
            <Descriptions.Item label="Username">
              {user?.username}
            </Descriptions.Item>
            <Descriptions.Item label="Created at">
              {user?.created_at}
            </Descriptions.Item>
            <Descriptions.Item label="Updated at">
              {user?.updated_at}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
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
export default DetailUser;
