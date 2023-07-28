import React from "react";
import { Col, Form, Input, Row } from "antd";
const FormCategories = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          name="name"
          label="Danh mục"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập danh mục",
            },
          ]}
        >
          <Input placeholder="Nhập tên danh mục" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FormCategories;
