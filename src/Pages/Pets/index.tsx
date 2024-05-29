import { useContext } from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Provider";
import { GetAll } from "../../component/methods/pets/get";
import { Pets } from "../../component/pets";
import petLogo from "../../assets/img/Group 134 (1).png";
import { SelectedAcronymStateAndCity } from "../../component/selectedAcronymStateAndCity";
import searchButton from "../../assets/img/Group 20.png";
import { createUseStyles } from "react-jss";
import { PetModal } from "../Pet/modal";

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

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    background: "#E44449",
    width: "25vw",
    height: "30vh",
    alignItems: "center",
  },
  backContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    margin: "0 0 0 2rem",
  },
  logoImage: {
    height: "3rem",
    cursor: "pointer",
  },
  searchButtonStyle: {
    height: "60px",
    width: "60px",
    background: "#F4D35E",
    border: "none",
    borderRadius: "18px",
    cursor: "pointer",
  },
  contentStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "6rem",
    margin: "10rem 0 0 3rem",
    minHeight: "100vh",
    overflow: "hidden",
    background: "#FDECED",
  },
  petsCount: {
    color: "#0D3B66",
    fontWeight: "400",
    fontSize: "23px",
    fontFamily: "Nunito",
  },
  petsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    flexWrap: "wrap",
  },
});

export function PetsDashBoard() {
  const { Sider, Content } = Layout;

  const navigate = useNavigate();

  const {
    city,
    setCity,
    preAlocatedCity,
    setPreAlocatedCity,
    setActualId,
    setIsModalOpen,
  } = useContext(Context);

  const { pets }: Pets = GetAll({ city });

  const {
    container,
    backContainer,
    logoImage,
    searchButtonStyle,
    contentStyle,
    petsCount,
    petsContainer,
  } = useStyles();

  return (
    <Layout>
      <Sider
        width={"25vw"}
        style={{
          background: "#F15156",
          display: "block",
        }}
      >
        <section className={container}>
          <div className={backContainer}>
            <div>
              <img
                className={logoImage}
                src={petLogo}
                alt=""
                onClick={() => {
                  setPreAlocatedCity("");
                  setCity("");
                  navigate("/");
                }}
              />
            </div>

            <div style={{ display: "flex" }}>
              <SelectedAcronymStateAndCity
                selectStateConfig="1px solid #F15156 !important"
                selectCityConfig="1px solid #F15156 !important"
              />
              <button
                className={searchButtonStyle}
                onClick={() => {
                  setCity(preAlocatedCity);
                }}
              >
                <img src={searchButton} alt="" />
              </button>
            </div>
          </div>
        </section>
      </Sider>
      <Layout style={{ background: "#FDECED" }}>
        <Content className={contentStyle}>
          <h1 className={petsCount}>
            Encontre{" "}
            <span style={{ fontWeight: "800" }}>{pets.length} amigos</span> na{" "}
            sua cidade
          </h1>
          <div className={petsContainer}>
            {pets ? (
              pets.map((pet) => {
                return (
                  <Pets
                    key={pet.id}
                    name={pet.name}
                    favoriteFood={pet.favoriteFood}
                    onClick={() => {
                      setActualId(pet.id);
                      setIsModalOpen(true);
                    }}
                  />
                );
              })
            ) : (
              <h1> loading...</h1>
            )}
          </div>
          <div>
            <PetModal />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
