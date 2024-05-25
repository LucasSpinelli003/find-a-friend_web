import React, { ReactNode, createContext, useState } from "react";

interface ContextProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export function Provider({ children }: ContextProviderProps) {
  const [city, setCity] = useState("São Paulo");

  return (
    <Context.Provider value={{ city, setCity }}>{children}</Context.Provider>
  );
}
