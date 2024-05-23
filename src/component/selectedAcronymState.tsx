import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { useState } from "react";

export function SelectedAcronymState() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "SP",
    },
    {
      key: "2",
      label: "RJ",
    },
    {
      key: "3",
      label: "SC",
    },
  ];

  const [key, setKey] = useState("");
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["3"],
        onClick: () => {
            setKey()
        },
      }}
    >
      <Typography.Link>
        <Space>
          {key}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
}
