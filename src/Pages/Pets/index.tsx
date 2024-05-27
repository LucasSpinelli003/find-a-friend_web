import { useState, useContext } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Provider";
import { FetchDataExample } from "../../component/methods/pets/get";
import { Pets } from "../../component/pets";

interface Pet {
  id: string;
  name: string;
  description: string;
  weight: number;
  favoriteFood: string;
  birth: Date;
}

interface Pets {
  pets: Pet[] | null;
}

export function PetsDashBoard() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const { city, setCity } = useContext(Context);

  const { pets }: Pets = FetchDataExample({ city });

  console.log(pets);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "back",
              onClick: () => {
                setCity("São Paulo");
                navigate("/");
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            overflow: "hidden",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {pets ? (
            pets.map((pet) => {
              return (
                <Pets
                  key={pet.id}
                  name={pet.name}
                  favoriteFood={pet.favoriteFood}
                />
              );
            })
          ) : (
            <h1> loading...</h1>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
