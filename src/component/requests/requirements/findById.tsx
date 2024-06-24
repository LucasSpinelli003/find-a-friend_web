import { useEffect, useState } from "react";

interface GetByRequirementIdProps {
  petId: string;
}

export interface Requirement {
  id: string;
  name: string;
  petId: string;
}

interface RequirementResponse {
  requirements: Requirement[] | null;
}

export function FindByRequirementId({ petId }: GetByRequirementIdProps) {
  const [data, setData] = useState<RequirementResponse>({ requirements: null });

  const [error, setError] = useState(null);
  useEffect(() => {
    petId.length > 1
      ? fetch(`http://localhost:3333/requirements/${petId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => setError(error))
      : console.log(petId);
  }, [petId]);

  if (error) {
    return error;
  }

  return data;
}
