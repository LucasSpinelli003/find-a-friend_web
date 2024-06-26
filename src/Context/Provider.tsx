import React, { ReactNode, createContext, useState } from "react";
export interface FormProps {
  name: string;
  content: string;
}
interface ContextProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  preAlocatedCity: string;
  setPreAlocatedCity: React.Dispatch<React.SetStateAction<string>>;
  actualId: string;
  setActualId: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: FormProps[];
  setForm: React.Dispatch<FormProps[]>;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export function Provider({ children }: ContextProviderProps) {
  const [city, setCity] = useState("Cidade");
  const [preAlocatedCity, setPreAlocatedCity] = useState("Cidade");
  const [actualId, setActualId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState([
    {
      name: "",
      content: "",
    },
  ]);

  return (
    <Context.Provider
      value={{
        city,
        setCity,
        preAlocatedCity,
        setPreAlocatedCity,
        actualId,
        setActualId,
        isModalOpen,
        setIsModalOpen,
        form,
        setForm,
      }}
    >
      {children}
    </Context.Provider>
  );
}
