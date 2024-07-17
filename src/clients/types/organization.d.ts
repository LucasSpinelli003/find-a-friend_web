export interface CreateOrganizationsInput {
  name: string;
  email: string;
  cep: string;
  city: string;
  description: string;
  phone: string;
  login: string;
  unHashedPassword: string;
  localization: string;
}
export interface CreateOrganizationsOutput {
  name: string;
  email: string;
  cep: string;
  city: string;
  description: string;
  phone: string;
  login: string;
  localization: string;
}

export interface AuthenticateInput {
  login: string;
  password: string;
}
