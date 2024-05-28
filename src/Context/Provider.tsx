import React, { ReactNode, createContext, useState } from "react";

interface ContextProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  preAlocatedCity: string;
  setPreAlocatedCity: React.Dispatch<React.SetStateAction<string>>;
  actualId: string;
  setActualId: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
      }}
    >
      {children}
    </Context.Provider>
  );
}
