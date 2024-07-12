import { useState } from "react";
import { PetsClient } from "../../clients/pets";
import { CreatePetOutput } from "../../clients/types/pet";
import { OrganizationClient } from "../../clients/organization";
import { CreateOrganizationsOutput } from "../../clients/types/organization";

export function Test() {
  const pets = new PetsClient();
  const createOrganization = new OrganizationClient();
  const [responseOrganization, setResponseOrganization] =
    useState<CreateOrganizationsOutput | null>(null);
  const [responsePet, setResponsePet] = useState<CreatePetOutput | null>(null);

  async function createOrganizationCOm() {
    const response = await createOrganization.createOrganizations({
      cep: "03081003",
      email: "lucas@email.com",
      city: "adasdsad",
      name: "teste",
      login: "asdasasd",
      unHashedPassword: "asdasdadad",
      description: "asdadsa",
      phone: "asdadasdsa",
      localization: "adasda",
    });
    setResponseOrganization(response);
  }

  async function findUnique() {
    const response = await pets.findUniquePet(
      "1eeea2bd-1fa0-4180-8dba-7de43b48e598",
    );
    setResponsePet(response);
  }

  return (
    <div>
      <button
        onClick={() => {
          findUnique();
          createOrganizationCOm();
        }}
      >
        teste
      </button>
      <h2>{responsePet?.pet?.name}</h2>
    </div>
  );
}
