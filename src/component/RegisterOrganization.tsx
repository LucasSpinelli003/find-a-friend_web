import { useState } from "react";
import { InputLabel } from "./inputLabel";

export function RegisterOrganization() {
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
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
        <InputLabel type="password" label="Senha" />
        <InputLabel type="password" label="Confirmar Senha" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "6rem",
          }}
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
              background: "none",
              textDecoration: "underline",
              border: "none",
              color: "#0D3B66",
              fontFamily: "Nunito",
              fontSize: "20px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Já possui conta?
          </button>
        </div>
      </form>
    </section>
  );
}
