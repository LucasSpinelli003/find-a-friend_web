import { useEffect, useState } from "react";

interface GetProps {
  city: string;
}

interface Pet {
  id: string;
  name: string;
  description: string;
  weight: number;
  favoriteFood: string;
  birth: Date;
}

interface Pets {
  pets: Pet[];
}

export function GetAll({ city }: GetProps) {
  const [data, setData] = useState<Pets>({
    pets: [
      {
        id: "",
        name: "",
        birth: new Date(),
        description: "",
        favoriteFood: "",
        weight: 0,
      },
    ],
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3333/pets/city/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [city]);

  if (error) {
    return error;
  }

  return data;
}
