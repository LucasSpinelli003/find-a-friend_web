import {
  CreateOrganizationsInput,
  CreateOrganizationsOutput,
} from "./types/organization";

export class OrganizationClient {
  async createOrganizations(
    data: CreateOrganizationsInput,
  ): Promise<CreateOrganizationsOutput> {
    const response = await fetch(`http://localhost:3333/organizations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  }
}
