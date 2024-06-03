import { unselectedEnergy, usedEnergy } from "./rateEnergyPet";
interface EnergyLevelStats {
  desc: string[];
  energyLevel: number;
}

export function EnegyLevelStats({ desc, energyLevel }: EnergyLevelStats) {
  return (
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
  );
}
