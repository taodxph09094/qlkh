import React from "react";
import { Col, Form, Input, Row } from "antd";
const FormSupplier = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          name="name"
          label="Tên đơn vị phân phối"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên đơn vị phân phối",
            },
          ]}
        >
          <Input placeholder="Nhập tên đơn vị phân phối" />
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

export default FormSupplier;
