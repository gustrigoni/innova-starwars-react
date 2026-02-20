import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Movies } from "../../components/Movies";
import { useSearch } from "../../SearchContext";
import { fetchMovies, fetchPersonByName } from "../../lib/api";
import { APP_ROUTES, FALLBACK_PERSON_IMAGE } from "../../lib/constants";
import type { Movie, Person as PersonModel } from "../../lib/contracts";
import { getGenderLabel } from "../../lib/formatters";

import {
  Container,
  Person,
  Picture,
  Name,
  Button,
  About,
  Col,
  Row,
  Info,
  Title,
} from "./styles";

export function Profile() {
  const { personData, setPersonData } = useSearch();
  const [character, setCharacter] = useState<PersonModel | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const queryName = typeof router.query.name === "string" ? router.query.name.trim() : "";

    async function loadCharacter() {
      try {
        setIsLoading(true);

        let targetCharacter: PersonModel | null = null;

        if (queryName) {
          targetCharacter = await fetchPersonByName(queryName);
        } else if (personData.name) {
          targetCharacter = personData;
        }

        if (!targetCharacter) {
          router.replace(APP_ROUTES.search);
          return;
        }

        setCharacter(targetCharacter);

        if (queryName && targetCharacter.name !== personData.name) {
          setPersonData(targetCharacter);
        }

        const filmsData = await fetchMovies(targetCharacter.films);
        setMovies(filmsData);
      } catch (error) {
        toast.error("Could not load the character.");
        router.replace(APP_ROUTES.search);
      } finally {
        setIsLoading(false);
      }
    }

    loadCharacter();
  }, [router.isReady, router.query.name, personData, router, setPersonData]);

  if (!character) {
    return null;
  }

  return (
    <Container>
      <Person>
        <Picture src={character.image || FALLBACK_PERSON_IMAGE} />
        <Row>
          <Name>{character.name}</Name>
          <Button onClick={() => router.back()}>Back</Button>
        </Row>
      </Person>
      <About>
        <Col>
          <Row>
            <Info label>Birth year:</Info>
            <Info>🎂 {character.birth}</Info>
          </Row>
          <Row>
            <Info label>Eye color:</Info>
            <Info>👀 {character.eyeColor}</Info>
          </Row>
          <Row>
            <Info label>Gender:</Info>
            <Info>{getGenderLabel(character.gender)}</Info>
          </Row>
        </Col>
        <Col>
          <Title>📺 Movies:</Title>
          {isLoading ? <Info>Loading...</Info> : <Movies data={movies} />}
        </Col>
      </About>
    </Container>
  );
}
