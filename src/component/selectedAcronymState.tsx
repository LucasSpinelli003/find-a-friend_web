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

  const ufs = ["SP", "RJ", "SC"];

  const [key, setKey] = useState("UF");
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["key"],
        onClick: (e) => {
          setKey(ufs[Number(e.key) - 1]);
        },
      }}
    >
      <Typography.Link>
        <Space style={{ color: "#fff" }}>
          {key}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
}
