export interface CreateOrganizationsInput {
  name: string;
  email: string;
  cep: string;
  localization: string;
  whatsapp: string;
  password: string;
}
export interface CreateOrganizationsOutput {
  name: string;
  email: string;
  cep: string;
  localization: string;
  whatsapp: string;
  password: string;
}

export interface AuthenticateInput {
  login: string;
  password: string;
}
