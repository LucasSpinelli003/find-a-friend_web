import { useEffect, useState } from "react";

interface Cidade {
  ibge: string;
  nome: string;
  ddd: string;
}

interface Estado {
  sigla: string;
}

interface SearchByCep {
  cidade: Cidade;
  estado: Estado;
  altitude: string;
  longitude: string;
  bairro: string;
  complemento: string;
  cep: string;
  logradouro: string;
  latitude: string;
}

export function FindByCep() {
  const [data, setData] = useState<SearchByCep>();

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.cepaberto.com/api/v3/cep?cep=01001000`, {
      headers: {
        Authorization: "Bearer 12992211",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  });

  if (error) {
    return error;
  }

  return data;
}
