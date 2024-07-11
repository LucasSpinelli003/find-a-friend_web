import { CreatePetInput, CreatePetOutput } from "./types/pet";

export class PetsClient {
  async findUniquePet(petId: string): Promise<CreatePetOutput> {
    console.log("here");
    const response = await fetch(`http://localhost:3333/pets/${petId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return response;
  }

  async createRechargeOrder(
    data: CreatePetInput,
    token: string,
  ): Promise<CreatePetOutput> {
    const response = await fetch(`http://localhost:3333/pets`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  }
}
