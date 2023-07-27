import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "../../assets/css/login.css";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { GetAuthSelector } from "../../redux/selectors";
import { login } from "../../redux/modules/auth/actions";
const Auth = () => {
  const dispatch = useDispatch();
  const auth = GetAuthSelector();
  const { isLogin, isSendRequest } = auth;
  useEffect(() => {
    if (auth?.error?.data?.message) {
      message.error(auth?.error?.data?.message);
    }
  }, [auth]);
  if (isLogin) {
    return <Redirect to="/dashboard" />;
  }

  const onFinish = (values) => {
    console.log(values);
    dispatch(login(values.email, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Quản lý kho hàng</p>
          <p>Đăng nhập để vào trang quản lý</p>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              {
                type: "email",
                message: "Định dạng email không đúng!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Auth;
