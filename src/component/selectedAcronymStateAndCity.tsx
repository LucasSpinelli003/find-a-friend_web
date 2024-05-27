import { useContext, useState } from "react";
import { Select, Space } from "antd";
import { Context } from "../Context/Provider";

interface SelectProps {
  selectStateConfig?: string;
  selectCityConfig?: string;
}
export function SelectedAcronymStateAndCity({
  selectCityConfig,
  selectStateConfig,
}: SelectProps) {
  const cityData = {
    SP: ["Cidade", "São Paulo", "Guarulhos", "Peruíbe"],
    RJ: ["Cidade", "Rio de Janeiro", "Niteroi", "Bangu"],
  };

  type CityName = keyof typeof cityData;

  const provinceData: CityName[] = ["SP", "RJ"];

  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(
    cityData[provinceData[0]][0] as CityName,
  );

  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0] as CityName);
  };

  const { setPreAlocatedCity } = useContext(Context);

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
    setPreAlocatedCity(value);
  };

  const selectSelectorStyle = {
    color: "#fff",
    fontSize: 16,
    backgroundColor: "transparent",
    fontFamily: "Nunito", // Altere para a família de fontes desejada
    fontWeight: 800,
  };

  return (
    <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{
          width: "4vw",
          height: "6vh",
          ...(window.innerWidth <= 1800 && {
            width: "67px",
            height: "50px",
          }),
        }}
        onChange={handleProvinceChange}
        className={"anotherCustomSelect"}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
      <Select
        style={{ width: "13vw", height: "6vh" }}
        value={secondCity}
        className={"customSelect"}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({ label: city, value: city }))}
      />
      <style>{`
        .customSelect{
            background-color: #E44449 !important;
            border-radius: 18px !important;
            
            font-size: 2rem !important ;
        }
        .anotherCustomSelect{
            border: ${selectStateConfig};
            border-radius: 18px;
        }
        .ant-select-selection-item{
            font-family: Nunito !important;
            font-weight: 800 !important;
            text-align:center !important;
            font-size: 19px !important;
        }
        .ant-select-selector, customSelect {
          color: ${selectSelectorStyle.color} !important;
          font-size: ${selectSelectorStyle.fontSize}px !important;
          background-color: ${selectSelectorStyle.backgroundColor} !important;
          border-radius: 18px !important;
          align-items: center !important;
          font-family: Nunito !important;
          font-weight: 800 !important;
          border: ${selectCityConfig};      
        }
      `}</style>
    </Space>
  );
}
