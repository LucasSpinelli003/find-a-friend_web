import logo from "../../assets/img/Group 19.png";
import animals from "../../assets/img/OBJECTS.png";
import searchButton from "../../assets/img/Group 20.png";

import { Col, Row, Typography } from "antd";
import { SelectedAcronymStateAndCity } from "../../component/selectedAcronymStateAndCity";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";


const useStyles = createUseStyles({
  container: {
    overflow:"hidden",
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
    justifyContent: "flex-start",
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
  '@media (max-width: 1500px)': {
    row: {
      display: "flex",
      flexDirection: "column",
      width: "80vw",
      gap: "3rem",
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
      gap: "4rem",
      alignItems: "center   ",
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

  return (
    <section className={container}>
      <Row className={row}>
        <Col>
          <div className={divHeaderCol}>
            <img src={logo} alt="" />
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
              <SelectedAcronymStateAndCity />
            </div>
            <button
              className={searchButtonClass}
              onClick={() => {
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
