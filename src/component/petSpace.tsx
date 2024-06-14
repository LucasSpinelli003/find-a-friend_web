import spaceAvatar from "./../assets/img/Group 57.png";

interface Pet {
  id?: string;
  name?: string;
  description?: string;
  weight?: number;
  fv_food?: string;
  birth?: Date;
}

export function PetSpace({ fv_food }: Pet) {
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
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          marginRight: "6rem",
        }}
      >
        <img src={spaceAvatar} alt="" />
      </div>
      <div>
        <h1
          style={{ fontSize: "18px", fontFamily: "Nunito", color: "#0D3B66" }}
        >
          {fv_food}
        </h1>
      </div>
    </section>
  );
}
