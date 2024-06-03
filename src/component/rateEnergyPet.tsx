import energy from "../assets/img/Vector.png";
import selectedEnergy from "../assets/img/Vector (1).png";
import { EnegyLevelStats } from "./energyLevelStats";

export const unselectedEnergy = energy;
export const usedEnergy = selectedEnergy;
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
      <EnegyLevelStats desc={desc} energyLevel={energyLevel} />
      <h1 style={{ marginBottom: "2rem" }}>{desc[energyLevel - 1]}</h1>
    </section>
  );
}
