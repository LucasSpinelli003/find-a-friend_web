export interface CreatePetInput {
  name: string;
  description: string;
  birth: Date;
  favoriteFood: string;
  weight: number;
  organizationId: string;
}

type Pet = {
  id: string;
  name: string;
  description: string;
  weight: number;
  fv_food: string;
  birth: Date | null;
  organizationId: string | null;
};

export interface CreatePetOutput {
  pet: Pet;
}
