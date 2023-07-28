import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";

const { Option } = Select;
const FormCustom = (props) => {
  return (
    <Form
      layout="vertical"
      hideRequiredMark
      initialValues={props.initialValues}
      ref={props.formRef}
    >
      {props.children}
    </Form>
  );
};

export default FormCustom;
