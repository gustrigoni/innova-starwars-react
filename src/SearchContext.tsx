import { createContext, type ReactNode, useContext, useState } from "react";
import type { PersonInterface } from "./lib/contracts";

interface ContextProps {
  personData: PersonInterface;
  setPersonData(props: PersonInterface): void;
}

interface Props {
  children: ReactNode;
}

const Context = createContext({} as ContextProps);

function SearchProvider({ children }: Props) {
  const [personData, setPersonData] = useState<PersonInterface>({
    name: "",
    birth: "",
    gender: "",
    eyeColor: "",
    image: "",
    films: [],
  });

  return <Context.Provider value={{ personData, setPersonData }}>{children}</Context.Provider>;
}

function useSearch() {
  return useContext(Context);
}

export { SearchProvider, useSearch };
