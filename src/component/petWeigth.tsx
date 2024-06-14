import uncheckedElipse from "./../assets/img/Ellipse 9.png";
import checkedElipse from "./../assets/img/Ellipse 8 (1).png";

interface Pet {
  id?: string;
  name?: string;
  description?: string;
  weight?: number;
  fv_food?: string;
  birth?: Date;
}

export function PetWeigth({ weight }: Pet) {
  const recebido = "medio";
  const desc = ["pequeno", "medio", "grande"];
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "3px solid #e6d7d777",
        width: "174px",
        height: "106px",
        gap: "0.5rem",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "0.25rem",
          marginRight: "6rem",
        }}
      >
        {desc.map((item, index) => {
          return (
            <img
              src={item === recebido ? checkedElipse : uncheckedElipse}
              alt={item}
              key={index}
            />
          );
        })}
      </div>
      <h1
        style={{
          marginRight: "4rem",
          fontSize: "18px",
          fontFamily: "Nunito",
          color: "#0D3B66",
        }}
      >
        {weight}
      </h1>
    </section>
  );
}
