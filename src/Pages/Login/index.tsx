import petsImage from "../../assets/img/OBJECTS (1).png";
import logo2 from "../../assets/img/Group 19.png";
import { Eye, EyeSlash } from "phosphor-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

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
          style={{ fontFamily: "Nunito", fontSize: "50px", color: "#0D3B66" }}
        >
          Boas-vindas!
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            action=""
          >
            <label
              style={{
                fontFamily: "Nunito",
                fontSize: "17px",
                fontWeight: 500,
                color: "#0D3B66",
              }}
            >
              Email
            </label>
            <input
              style={{
                background: "#eeecec",
                border: "0.5px solid #777",
                height: "3.5rem",
                width: "30rem",
                borderRadius: "10px",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
              type="text"
            />
            <label
              style={{
                fontFamily: "Nunito",
                fontSize: "17px",
                fontWeight: 500,
                color: "#0D3B66",
              }}
            >
              Senha
            </label>
            <div style={{ position: "relative", width: "30rem" }}>
              <input
                style={{
                  background: "#eeecec",
                  height: "3.5rem",
                  width: "100%",
                  borderRadius: "10px",
                  border: "0.5px solid #777",
                  alignItems: "center",
                  paddingLeft: "1rem",
                  paddingRight: "3rem",
                }}
                type={passwordType}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "1rem",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setPasswordType((prevType) =>
                    prevType === "password" ? "text" : "password",
                  );
                }}
              >
                {passwordType === "password" ? <EyeSlash /> : <Eye />}
              </div>
            </div>
          </form>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <button
              style={{
                height: "4rem",
                width: "30rem",
                borderRadius: "15px",
                background: "#0D3B66",
                border: "none",
                color: "#fff",
                fontFamily: "Nunito",
                fontSize: "20px",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              style={{
                height: "4rem",
                width: "30rem",
                borderRadius: "15px",
                border: "none",
                background: "#e9e8e8",
                color: "#0D3B66",
                fontFamily: "Nunito",
                fontSize: "20px",
                fontWeight: 800,
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastrar minha organização
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
