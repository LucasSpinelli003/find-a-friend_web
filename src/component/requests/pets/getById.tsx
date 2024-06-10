import { useEffect, useState } from "react";

interface GetByPetIdProps {
  actualId: string;
}

interface Pet {
  id: string;
  name: string;
  description: string;
  weight: number;
  fv_food: string;
  birth: Date;
}

interface PetResponse {
  pet: Pet;
}

export function GetById({ actualId }: GetByPetIdProps) {
  const [data, setData] = useState<PetResponse>({
    pet: {
      id: "",
      name: "",
      birth: new Date(),
      description: "",
      fv_food: "",
      weight: 0,
    },
  });

  const [error, setError] = useState(null);
  useEffect(() => {
    actualId.length > 5
      ? fetch(`http://localhost:3333/pets/${actualId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => setError(error))
      : console.log(actualId);
  }, [actualId]);

  if (error) {
    return error;
  }

  return data;
}
