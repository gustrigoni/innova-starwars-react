import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Person } from "../../components/Person";
import { fetchPersons } from "../../lib/api";
import { APP_ROUTES } from "../../lib/constants";
import type { Pagination, Person as PersonModel } from "../../lib/contracts";

import {
  Container,
  Row,
  Form,
  Logo,
  Input,
  Col,
  Title,
  Description,
  List,
  Footer,
  Button,
  ButtonContainer,
} from "./styles";

const EMPTY_PAGINATION: Pagination = {
  next: false,
  previous: false,
};

export function Search() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState<PersonModel[]>([]);
  const [pagination, setPagination] = useState<Pagination>(EMPTY_PAGINATION);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const queryName = typeof router.query.name === "string" ? router.query.name : "";

    setSearchTerm(queryName);
    setSearchInput(queryName);
    setPage(1);
  }, [router.isReady, router.query.name]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    async function loadPersons() {
      try {
        setIsLoading(true);
        const response = await fetchPersons({ page, name: searchTerm || undefined });

        setPersons(response.persons);
        setPagination(response.pagination);
      } catch (error) {
        setPersons([]);
        setPagination(EMPTY_PAGINATION);
        toast.error("Could not load characters.");
      } finally {
        setIsLoading(false);
      }
    }

    loadPersons();
  }, [page, searchTerm, router.isReady]);

  function updateSearchRoute(term: string) {
    if (term) {
      router.replace(`${APP_ROUTES.search}?name=${encodeURIComponent(term)}`, undefined, { shallow: true });
      return;
    }

    router.replace(APP_ROUTES.search, undefined, { shallow: true });
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTerm = searchInput.trim();
    setSearchTerm(normalizedTerm);
    setPage(1);
    updateSearchRoute(normalizedTerm);
  }

  const resultDescription = useMemo(() => {
    const suffix = persons.length > 1 ? "characters found" : "character found";
    return `${persons.length} ${suffix}.`;
  }, [persons.length]);

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSearch}>
          <Logo />
          <Input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        </Form>
        <Col>
          {!isLoading ? (
            <>
              <Title>Result</Title>
              <Description>{resultDescription}</Description>
            </>
          ) : (
            <Title>Loading...</Title>
          )}
        </Col>
        <List>
          <Col>
            {!isLoading &&
              persons.map((person) => (
                <Person key={person.name} name={person.name} gender={person.gender} data={person} />
              ))}
          </Col>
        </List>
        <Footer>
          <Button onClick={() => router.push(APP_ROUTES.home)}>Home</Button>
          <ButtonContainer>
            {!isLoading && pagination.previous && (
              <Button onClick={() => setPage((oldPage) => Math.max(oldPage - 1, 1))}>Back</Button>
            )}
            {!isLoading && pagination.next && <Button onClick={() => setPage((oldPage) => oldPage + 1)}>Next</Button>}
          </ButtonContainer>
        </Footer>
      </Row>
    </Container>
  );
}
