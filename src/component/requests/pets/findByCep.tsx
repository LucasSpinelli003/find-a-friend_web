import { useEffect, useState } from "react";

export interface SearchByCep {
  lat?: string;
  lng?: string;
  cep: string;
  address_type?: string;
  address_name?: string;
  address?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  ddd?: string;
  city_ibge?: string;
}

export function FindByCep({ cep }: SearchByCep) {
  const [data, setData] = useState<SearchByCep>();

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [cep]);

  if (error) {
    return error;
  }

  return data;
}
