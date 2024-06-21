interface InputLabelProps {
  label: string;
}

export function InputLabel({ label }: InputLabelProps) {
  return (
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
      />
    </>
  );
}
