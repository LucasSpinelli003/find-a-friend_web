import {
  AuthenticateInput,
  CreateOrganizationsOutput,
} from "./types/organization";

export class AuthenticateClient {
  async authenticate(
    data: AuthenticateInput,
  ): Promise<CreateOrganizationsOutput> {
    const response = await fetch(`http://localhost:3333/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  }
}
