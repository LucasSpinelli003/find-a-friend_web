import energy from "../assets/img/Vector.png";
import selectedEnergy from "../assets/img/Vector (1).png";

interface EnergyLevelProps {
  energyLevel: number;
}

export function RatePetEnergy({ energyLevel }: EnergyLevelProps) {
  const desc = [
    "muito cansado",
    "pouca energia",
    "normal",
    "muita energia",
    "espoleta",
  ];
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        width: "174px",
        height: "106px",
        borderRadius: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid #000",
          gap: "0.5rem",
          margin: "10rem 0",
        }}
      >
        {desc.map((item, index) => {
          return (
            <img
              src={index + 1 <= energyLevel ? selectedEnergy : energy}
              alt={item}
              key={index}
            />
          );
        })}
      </div>
      <div>
        <h1>{desc[energyLevel - 1]}</h1>
      </div>
    </section>
  );
}
