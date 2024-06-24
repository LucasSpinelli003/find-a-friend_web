import petsImage from "../../assets/img/OBJECTS (1).png";
import logo2 from "../../assets/img/Group 19.png";
import { RegisterOrganization } from "../../component/RegisterOrganization";

export function Register() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20rem",
        width: "80%",
        height: "80%",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "20px",
          alignItems: "center",
          background: "#F15156",
          height: "661px",
          width: "488px",
          borderRadius: "25px",
          marginTop: "8rem",
          marginLeft: "8rem",
        }}
      >
        <img style={{ marginTop: "5rem" }} src={logo2} alt="" />
        <img style={{ marginBottom: "3rem" }} src={petsImage} alt="" />
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "12rem",
          gap: "6rem",
        }}
      >
        <h1
          style={{
            fontFamily: "Nunito",
            fontSize: "50px",
            color: "#0D3B66",
            alignItems: "center",
          }}
        >
          Cadastre sua <br />
          organização
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <RegisterOrganization />
        </div>
      </section>
    </section>
  );
}
