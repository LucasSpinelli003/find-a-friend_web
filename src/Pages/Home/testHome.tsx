import logo from "../../assets/img/Group 19.png";
import animals from "../../assets/img/OBJECTS.png";

import { Col, Row, Typography } from "antd";
import { SelectedAcronymState } from "../../component/selectedAcronymState";
import { SelectedCity } from "../../component/selectedCity";
export function Hometest() {
  return (
    <section
      style={{
        background: "#F15156",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          gap: "7rem",
          height: "77vh",
        }}
      >
        <Col style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <img src={logo} alt="" />
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              color: "#fff",
              fontSize: "5rem",
              fontFamily: "Nunito",
              fontWeight: 800,
              fontStyle: "extraBold",
              maxWidth: "29vw",
              lineHeight: 1,
            }}
          >
            Leve a felicidade para o seu lar
          </Typography>
          <div>
            <img src={animals} alt="" />
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "30vw" }}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                fontSize: "2rem",
                fontFamily: "Nunito",
                fontWeight: 600,
              }}
            >
              Encontre o animal de estimação ideal para seu estilo de vida!
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5rem",
              alignItems: "center   ",
            }}
          >
            <Typography style={{ color: "#fff", fontSize: "1rem" }}>
              Busque um amigo:
            </Typography>
            <div
              style={{
                display: "flex",
                background: "transparent",
                border: "1px solid #fff",
                borderRadius: "20px",
                minHeight: "7.7vh",
                minWidth: "3.7vw",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SelectedAcronymState />
            </div>
            <div>
              <SelectedCity />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}
