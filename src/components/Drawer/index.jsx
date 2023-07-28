import React from "react";
import { Button, Drawer, Space } from "antd";

const DrawerCustom = (props) => {
  const handleSubmit = () => {
    props.formRef.current
      .validateFields()
      .then((values) => {
        props.setFormData(values);
        if (props.typeCommon === "product") {
          values.description = props.description;
        }
        props.onPressCreate(values);
        console.log("Form data:", values);
      })
      .catch((error) => {
        console.error("Error while submitting form:", error);
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
        width={props.width ? props.width : 720}
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
