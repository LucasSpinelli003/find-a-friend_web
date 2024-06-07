import spaceAvatar from "./../assets/img/Group 57.png";

export function PetSpace() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #000",
        width: "174px",
        height: "106px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          marginRight: "6   rem",
        }}
      >
        <img src={spaceAvatar} alt="" />
      </div>
      <div>
        <h1>Ambiente Amplo</h1>
      </div>
    </section>
  );
}
