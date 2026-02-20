import { useRouter } from "next/router";

import { Container, Name, Button } from "./styles";

import { useSearch } from "../../SearchContext";
import { APP_ROUTES } from "../../lib/constants";
import type { Person as PersonModel } from "../../lib/contracts";
import { getGenderEmoji } from "../../lib/formatters";

interface PersonProps {
  name: string;
  gender: string;
  data: PersonModel;
}

export function Person({ name, gender, data }: PersonProps) {
  const { setPersonData } = useSearch();
  const router = useRouter();

  function handleOpenCharacter() {
    setPersonData(data);
    router.push(`${APP_ROUTES.character}?name=${encodeURIComponent(data.name)}`);
  }

  return (
    <Container>
      <Name>
        {getGenderEmoji(gender)} {name}
      </Name>
      <Button onClick={handleOpenCharacter}>View</Button>
    </Container>
  );
}
