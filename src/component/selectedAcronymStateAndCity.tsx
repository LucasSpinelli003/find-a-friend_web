import { useContext, useState } from "react";
import { Select, Space } from "antd";
import { Context } from "../Context/Provider";

export function SelectedAcronymStateAndCity() {
  const cityData = {
    SP: ["São Paulo", "Guarulhos", "Peruíbe"],
    RJ: ["Rio de Janeiro", "Niteroi", "Bangu"],
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

  const { setCity } = useContext(Context);

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
    console.log(value);
    setCity(value);
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
          width: "3.3vw",
          height: "6vh",
          ...(window.innerWidth <= 1500 && {
            width: "5.3vw",
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
            border: none !important;
            boxShadow: none !important;

            :hover{
            border: none !important;
            boxShadow: none !important;            
            }
            :active{
                border: none !important;
                boxShadow: "none" !important;
            }
        }
        .anotherCustomSelect{
            border: 0.1px solid #fff;
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
          border: none !important;
            
              
        }
      `}</style>
    </Space>
  );
}
