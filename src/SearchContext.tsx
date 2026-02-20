import { createContext, type ReactNode, useContext, useMemo, useState } from "react";
import type { Person } from "./lib/contracts";

interface SearchContextValue {
  personData: Person;
  setPersonData(person: Person): void;
}

interface SearchProviderProps {
  children: ReactNode;
}

const EMPTY_PERSON: Person = {
  name: "",
  birth: "",
  gender: "",
  eyeColor: "",
  image: "",
  films: [],
};

const SearchContext = createContext<SearchContextValue | null>(null);

function SearchProvider({ children }: SearchProviderProps) {
  const [personData, setPersonData] = useState<Person>(EMPTY_PERSON);

  const value = useMemo(
    () => ({
      personData,
      setPersonData,
    }),
    [personData]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within SearchProvider.");
  }

  return context;
}

export { SearchProvider, useSearch };
