import { Button, Card, Input, Select, Space } from "antd";
import React from "react";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

const CardCustom = (props) => {
  return (
    <Card
      title={props.title}
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
            // value={keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
          />
          <Button
            type="primary"
            onClick={props.onRefresh}
            icon={<ReloadOutlined />}
          >
            Làm mới
          </Button>
          <Button
            type="primary"
            onClick={props.showDrawer}
            icon={<PlusOutlined />}
          >
            Thêm mới
          </Button>
        </Space>
      }
    >
      {props.children}
    </Card>
  );
};

export default CardCustom;
