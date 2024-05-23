import logo from "../../assets/img/Group 19.png";
import animals from "../../assets/img/OBJECTS.png";

import { Col, Row, Typography } from "antd";
import { SelectedAcronymState } from "../../component/selectedAcronymState";
export function Home() {
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
          flexDirection: "row",
          width: "80vw",
          height: "77vh",
          justifyContent: "space-between",
        }}
      >
        <Col
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            flexDirection: "column",
            maxWidth: "50%",
          }}
        >
          <div>
            <img src={logo} alt="" />
          </div>
          <Typography
            style={{
              color: "#fff",
              fontSize: "6rem",
              fontFamily: "Nunito",
              fontWeight: 800,
              fontStyle: "extraBold",
              maxWidth: "86%",
              lineHeight: 1,
            }}
          >
            Leve a felicidade para o seu lar
          </Typography>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "2rem",
              fontFamily: "Nunito",
              fontWeight: 600,
              width: "65%",
            }}
          >
            Encontre o animal de estimação ideal para seu estilo de vida!
          </Typography>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxHeight: "100%",
            // gap: "1rem",
          }}
        >
          <div>
            <img src={animals} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              color: "#fff",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid #fff",
              borderRadius: "10px",
              // maxWidth: "10%",
              // minHeight: "7%",
              alignItems: "center",
            }}
          >
            <SelectedAcronymState />
          </div>
          <Typography style={{ color: "#fff" }}>seráse</Typography>
        </Col>
      </Row>
    </section>
  );
}
