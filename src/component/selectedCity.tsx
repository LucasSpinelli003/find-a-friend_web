import { Select } from "antd";
import { useState } from "react";

export function SelectedCity() {
  const [city, setCity] = useState("São Paulo");

  const handleChange = (value: string) => {
    setCity(value);
  };
  return (
    <Select
      defaultValue={city}
      style={{
        width: 200,
        background: "#E44449 !important",
        color: "#E44449 !important",
      }}
      onChange={handleChange}
      options={[
        {
          options: [
            { label: <span>São Paulo</span>, value: "São Paulo" },
            { label: <span>Rio de Janeiro</span>, value: "Rio de Janeiro" },
          ],
        },
      ]}
    />
  );
}
