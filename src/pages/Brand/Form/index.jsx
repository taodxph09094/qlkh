import React from "react";
import { Col, Form, Input, Row } from "antd";
const FormBrand = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          name="name"
          label="Tên thương hiệu"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên thương hiệu",
            },
          ]}
        >
          <Input placeholder="Nhập tên thương hiệu" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập địa chỉ",
            },
          ]}
        >
          <Input placeholder="Nhập địa chỉ" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormBrand;
