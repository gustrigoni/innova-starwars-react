import {
  createContext,
  ReactChild,
  ReactFragment,
  ReactNode,
  ReactPortal,
  useContext,
  useState
} from "react";

interface Person {
  name?: string;
  birth?: string;
  gender: string | 'n/a';
  eyeColor?: string;
  image?: string;
  films?: string[];
}

interface ContextProps {
  personData: Person;
  setPersonData(props: Person): void;
}

interface Props {
  children: ReactNode | ReactChild | ReactFragment | ReactPortal;
}

const Context = createContext({} as ContextProps);

function SearchProvider({ children }: Props) {

  const [personData, setPersonData] = useState<Person>({ gender: '' });

  return <Context.Provider value={{ personData, setPersonData }}>
    {children}
  </Context.Provider>

}

function useSearch() {
  return useContext(Context);
}

export { SearchProvider, useSearch };