import { useState } from "react";
import { PetsClient } from "../../clients/pets";
import { CreatePetOutput } from "../../clients/types/pet";

export function Test() {
  const pets = new PetsClient();
  const [response, setResponse] = useState<CreatePetOutput>();
  const id = "1eeea2bd-1fa0-4180-8dba-7de43b48e598";
  async function findUnique() {
    setResponse(await pets.findUniquePet(id));
  }
  console.log(response);
  return (
    <div>
      <button
        onClick={() => {
          findUnique();
        }}
      >
        teste
      </button>
      <h2>{response?.pet.name}</h2>
    </div>
  );
}
