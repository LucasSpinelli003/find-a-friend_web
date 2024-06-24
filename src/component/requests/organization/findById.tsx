import { useEffect, useState } from "react";

interface GetByOrganizationIdProps {
  organizationId: string;
}

export interface Organization {
  id: string;
  name: string;
  login: string;
  password: string;
  description: string;
  phone: string;
  localization: string;
  city: string;
  createdAt: Date;
}

interface OrganizationResponse {
  organization: Organization;
}

export function FindByOrganizationId({
  organizationId,
}: GetByOrganizationIdProps) {
  const [data, setData] = useState<OrganizationResponse>({
    organization: {
      id: "",
      name: "",
      login: "",
      password: "",
      city: "",
      createdAt: new Date(),
      description: "",
      localization: "",
      phone: "",
    },
  });

  const [error, setError] = useState(null);
  useEffect(() => {
    organizationId.length > 5
      ? fetch(`http://localhost:3333/organizations/${organizationId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => setError(error))
      : console.log(organizationId);
  }, [organizationId]);

  if (error) {
    return error;
  }

  return data;
}
