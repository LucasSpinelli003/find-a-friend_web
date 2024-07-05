export class PetClient {
  constructor(private ) {}

  async createRechargeOrder(
    data: CreateOrganizationsRequest,
  ): Promise<CreateOrganizationsResponse> {
    const token = await this.cognitoClient.getAccessToken();
    const response = await fetch(`http://localhost:3333/organizations`, {
      method: "POST",
      headers: {
        v: "1",
        Authorization: token.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return response;
  }
}
