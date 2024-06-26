import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";

interface InputLabelProps {
  label: string;
  type?: string;
  state: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export function InputLabel({ label, type, state, value }: InputLabelProps) {
  const [passwordType, setPasswordType] = useState("password");

  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      {type === "password" ? (
        <>
          <label
            style={{
              fontFamily: "Nunito",
              fontSize: "17px",
              fontWeight: 500,
              color: "#0D3B66",
            }}
          >
            {label}
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
              value={value}
              onChange={(item) => {
                state(item.target.value);
              }}
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
                setPasswordType((prevType: string) =>
                  prevType === "password" ? "text" : "password",
                );
              }}
            >
              {passwordType === "password" ? <EyeSlash /> : <Eye />}
            </div>
          </div>
        </>
      ) : (
        <>
          <label
            style={{
              fontFamily: "Nunito",
              fontSize: "17px",
              fontWeight: 500,
              color: "#0D3B66",
            }}
          >
            {label}
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
            value={value}
            onChange={(item) => {
              state(item.target.value);
            }}
          />
        </>
      )}
    </section>
  );
}
