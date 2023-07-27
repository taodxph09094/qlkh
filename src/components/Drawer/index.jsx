import React from "react";
import { Button, Drawer, Space } from "antd";

const DrawerCustom = (props) => {
  const handleSubmit = () => {
    props.formRef.current.validateFields().then((values) => {
      props.setFormData(values);
      console.log("Form data:", values);
    });
  };
  const handleClose = () => {
    props.formRef.current.resetFields();
    props.onClose();
    props.setFormData({});
  };
  return (
    <>
      <Drawer
        title={props.title}
        width={720}
        onClose={handleClose}
        open={props.open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={handleClose}>Huỷ</Button>
            <Button onClick={handleSubmit} type="primary">
              Hoàn tất
            </Button>
          </Space>
        }
      >
        {props.children}
      </Drawer>
    </>
  );
};

export default DrawerCustom;
