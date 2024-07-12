import { useState } from "react";
import { InputLabel } from "../../../component/inputLabel";
import { useNavigate } from "react-router-dom";
import { OrganizationClient } from "../../../clients/organization";
import { MessageResponse } from "../../../component/messageResponse";

export function RegisterOrganization() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [localization, setLocalization] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");

  const organizationClient = new OrganizationClient();
  async function handleCreateOrganization() {
    const response = await organizationClient.createOrganizations({
      name,
      cep,
      city: "",
      description,
      email,
      localization,
      login: email,
      phone: whatsapp,
      unHashedPassword: password,
    });
    return response;
  }
  const isNotTheSamePassword = password !== confirmPassword;
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
          value={description}
          state={setDescription}
          label="Descrição"
        />
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
            onClick={(e) => {
              e.preventDefault();
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const response = handleCreateOrganization();
              // if (response !== null) {
              // }
            }}
            disabled={isNotTheSamePassword || password === ""}
            style={
              isNotTheSamePassword || password === ""
                ? {
                    height: "4rem",
                    width: "30rem",
                    borderRadius: "15px",
                    background: "#7777",
                    border: "none",
                    color: "#fff",
                    fontFamily: "Nunito",
                    fontSize: "20px",
                    fontWeight: 800,
                  }
                : {
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
                  }
            }
          >
            Cadastrar
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
          <MessageResponse />
        </div>
      </form>
    </section>
  );
}
