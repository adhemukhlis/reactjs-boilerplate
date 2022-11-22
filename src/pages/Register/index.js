import ApiService from "@/src/services/clientBlog";
import { Button, Form, Input, Checkbox, message } from "antd";
import { useState } from "react";

const { useForm } = Form;
const Register = () => {
  const [load, setLoad] = useState(false);
  const [size, setSize] = useState("large");
  const [form] = useForm();
  const onFinish = (values) => {
    setLoad(true);
    const { name, username, password } = form.getFieldsValue();
    ApiService.request({
      method: "post",
      url: "auth/register",
      data: {
        name,
        username,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        message.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        if ([400].includes(err.response.status)) {
          message.error(
            <ul>
              {err.response.data.message.map(({ param, msg }, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          );
        } else {
          message.error(err.response.data.message);
        }
      })
      .finally(() => {
        setLoad(false);
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 2,
      }}
      wrapperCol={{
        span: 22,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 11,
          span: 20,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 21,
        }}
      >
        <Button
          shape="round"
          size={size}
          style={{
            background:
              "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          }}
          loading={load}
          type="primary"
          htmlType="submit"
        >
          Daftar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
