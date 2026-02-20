import { useRouter } from "next/router";

import { Container, Name, Button } from "./styles";

import { useSearch } from "../../SearchContext";
import type { PersonInterface } from "../../lib/contracts";

interface Props {
  name: string;
  gender: string;
  data: PersonInterface;
}

export function Person(props: Props) {
  const { setPersonData } = useSearch();
  const router = useRouter();

  function emojiByGender() {
    switch (props.gender.toLowerCase()) {
      case "male":
        return "👦";
      case "female":
        return "👧";
      case "hermaphrodite":
        return "🦄";
      default:
        return "🤖";
    }
  }

  function handleClick() {
    setPersonData(props.data);
    router.push("/profile");
  }

  return (
    <Container>
      <Name>
        {emojiByGender()} {props.name}
      </Name>
      <Button onClick={handleClick}>Visualizar</Button>
    </Container>
  );
}
