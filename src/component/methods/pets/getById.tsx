import { useEffect, useState } from "react";

interface GetProps {
  id: string;
}

interface Pet {
  id: string;
  name: string;
  description: string;
  weight: number;
  favoriteFood: string;
  birth: Date;
}

export function GetById({ id }: GetProps) {
  const [data, setData] = useState<Pet>({
    id: "",
    name: "",
    birth: new Date(),
    description: "",
    favoriteFood: "",
    weight: 0,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3333/pets/city/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [id]);

  if (error) {
    return error;
  }

  return data;
}
