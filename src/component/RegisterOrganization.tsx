import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import { InputLabel } from "./inputLabel";

export function RegisterOrganization() {
  return (
    <section>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        action=""
      >
        <InputLabel label="Nome do responsável" />
        <InputLabel label="Email" />
        <InputLabel label="CEP" />
        <InputLabel label="Endereço" />
        <InputLabel label="Whatsapp" />
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
            type="password"
          />
        </div>
        <label
          style={{
            fontFamily: "Nunito",
            fontSize: "17px",
            fontWeight: 500,
            color: "#0D3B66",
          }}
        >
          Confirmar Senha
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
            type="password"
          />
        </div>
      </form>
    </section>
  );
}
