import logo from "../../assets/img/Group 19.png";
import animals from "../../assets/img/OBJECTS.png";
import searchButton from "../../assets/img/Group 20.png";

import { Col, Row, Typography } from "antd";
import { SelectedAcronymStateAndCity } from "../../component/selectedAcronymStateAndCity";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/Provider";

const useStyles = createUseStyles({
  container: {
    overflow: "hidden",
    background: "#F15156",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "column",
    width: "80vw",
    gap: "7rem",
    height: "77vh",
  },
  divHeaderCol: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Nunito",
    fontSize: "15px",
  },
  mainCol: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textMainCol: {
    color: "#fff",
    fontSize: "5rem",
    fontFamily: "Nunito",
    fontWeight: 800,
    fontStyle: "extraBold",
    maxWidth: "29vw",
    lineHeight: 1,
  },

  footerCol: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5rem",
  },
  textFooterCol: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    fontSize: "2rem",
    fontFamily: "Nunito",
    fontWeight: 600,
  },
  divFooterCol: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    alignItems: "center   ",
  },
  searchButtonClass: {
    height: "72px",
    width: "72px",
    background: "#F4D35E",
    border: "none",
    borderRadius: "18px",
    cursor: "pointer",
  },
  "@media (max-width: 1800px)": {
    row: {
      display: "flex",
      flexDirection: "column",
      width: "80vw",
      gap: "1rem",
      height: "77vh",
    },
    textMainCol: {
      color: "#fff",
      fontSize: "3rem",
      fontFamily: "Nunito",
      fontWeight: 800,
      fontStyle: "extraBold",
      maxWidth: "29vw",
      lineHeight: 1,
    },
    divFooterCol: {
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      alignItems: "center   ",
    },
    searchButtonClass: {
      height: "60px",
      width: "55px",
      background: "#F4D35E",
      border: "none",
      borderRadius: "18px",
      cursor: "pointer",
    },
  },
});

export function Home() {
  const {
    container,
    row,
    divHeaderCol,
    mainCol,
    textMainCol,
    footerCol,
    textFooterCol,
    divFooterCol,
    searchButtonClass,
  } = useStyles();

  const navigate = useNavigate();

  const { setCity, preAlocatedCity } = useContext(Context);

  return (
    <section className={container}>
      <Row className={row}>
        <Col>
          <div className={divHeaderCol}>
            <img src={logo} alt="" />
            <h1
              style={{ marginRight: "2rem", color: "#fff", cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login / Cadastro
            </h1>
          </div>
        </Col>
        <Col className={mainCol}>
          <Typography className={textMainCol}>
            Leve <br />a felicidade para o seu lar
          </Typography>
          <div>
            <img src={animals} alt="" />
          </div>
        </Col>
        <Col className={footerCol}>
          <div style={{ display: "flex", flexDirection: "row", width: "30vw" }}>
            <Typography className={textFooterCol}>
              Encontre o animal de estimação ideal para seu estilo de vida!
            </Typography>
          </div>
          <div className={divFooterCol}>
            <Typography style={{ color: "#fff", fontSize: "1rem" }}>
              Busque um amigo:
            </Typography>
            <div>
              <SelectedAcronymStateAndCity
                selectCityConfig="none !important"
                selectStateConfig="1px solid #fff !important"
              />
            </div>
            <button
              className={searchButtonClass}
              onClick={() => {
                setCity(preAlocatedCity);
                navigate("/pets");
              }}
            >
              <img src={searchButton} alt="" />
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
}
