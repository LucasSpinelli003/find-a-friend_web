import unselectedEnergy from "../assets/img/Vector.png";
import usedEnergy from "../assets/img/Vector (1).png";
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
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        border: "1px solid #000",
        margin: "0 0 0 8rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {desc.map((item, index) => {
          return (
            <img
              src={index + 1 <= energyLevel ? usedEnergy : unselectedEnergy}
              alt={item}
              key={index}
            />
          );
        })}
      </div>
      <h1>{desc[energyLevel - 1]}</h1>
    </section>
  );
}
