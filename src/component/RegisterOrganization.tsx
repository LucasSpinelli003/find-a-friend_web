import { useState } from "react";
import { InputLabel } from "./inputLabel";
import { useNavigate } from "react-router-dom";

export function RegisterOrganization() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [localization, setLocalization] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <section>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        action=""
      >
        <InputLabel value={name} state={setName} label="Nome do responsável" />
        <InputLabel value={email} state={setEmail} label="Email" />
        <InputLabel value={cep} state={setCep} label="CEP" />
        <InputLabel
          value={localization}
          state={setLocalization}
          label="Endereço"
        />
        <InputLabel value={whatsapp} state={setWhatsapp} label="Whatsapp" />
        <InputLabel
          value={password}
          state={setPassword}
          type="password"
          label="Senha"
        />
        <InputLabel
          value={confirmPassword}
          state={setConfirmPassword}
          type="password"
          label="Confirmar Senha"
        />
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
            onClick={() => {
              navigate("/login");
            }}
          >
            Já possui conta?
          </button>
        </div>
      </form>
    </section>
  );
}
