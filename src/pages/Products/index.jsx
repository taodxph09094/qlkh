import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Space,
  Table,
  Drawer,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useGetData } from "../../hooks/services/useGetApi";
import { PRODUCTS } from "../../constants/api";
import { columns } from "./column";
const { Option } = Select;

const Products = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const getProducts = useGetData(PRODUCTS.LIST);
  useEffect(() => {
    let isCurrent = true;
    if (!!isCurrent) {
      void getProducts._getData();
    }
    return () => {
      isCurrent = false;
    };
  }, []);

  const data = [];
  getProducts.data.products &&
    getProducts.data.products.forEach((item, i) => {
      data.push({
        _id: item._id,
        number: i + 1,
        name: item.name,
        price: item.price - (item.price * item.promotion) / 100,
        promotion: item.promotion,
        importPrice: item.importPrice,
        Stock: item.Stock,
        category: item.category,
        supplier: item.supplier,
        brand: item.brand,
        createdAt: item.createdAt,
      });
    });
  console.log(data);
  return (
    <Card
      title="Danh sách sản phẩm"
      extra={
        <Space>
          <Select
            showSearch
            placeholder="Tìm kiếm theo danh mục"
            optionFilterProp="children"
            // onChange={onChangeSelect}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            // options={brands}
          />
          <Select
            showSearch
            placeholder="Tìm kiếm theo thương hiệu"
            optionFilterProp="children"
            // onChange={onChangeSelect}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            // options={brands}
          />
          <Input
            placeholder="Tìm kiếm theo tên "
            // onChange={(e) => setKeyword(e.target.value)}
          />
          <Button type="primary" onClick={showDrawer} icon={<ReloadOutlined />}>
            Lam moi
          </Button>
          <Button type="primary" onClick={showDrawer} icon={<SearchOutlined />}>
            Tim kiem
          </Button>
          <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
            Them moi
          </Button>
        </Space>
      }
    >
      <Table bordered columns={columns} dataSource={data} />
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Huỷ</Button>
            <Button onClick={onClose} type="primary">
              Hoàn tất
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: "Please enter url",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[
                  {
                    required: true,
                    message: "Please select an owner",
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: "Please choose the type",
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: "Please choose the approver",
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: "Please choose the dateTime",
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: "100%",
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Card>
  );
};

export default Products;
