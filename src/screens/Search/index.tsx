import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/router";

import { Person } from "../../components/Person";
import type { Pagination, PersonInterface, PersonsApiResponse } from "../../lib/contracts";

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

export function Search() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState<PersonInterface[]>([]);
  const [pagination, setPagination] = useState<Pagination>({});
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    if (!router.isReady) return;

    const queryName = typeof router.query.name === "string" ? router.query.name : "";
    setName(queryName);
    setSearchInput(queryName);
    setPage(1);
  }, [router.isReady, router.query.name]);

  useEffect(() => {
    if (!router.isReady) return;

    const load = async () => {
      setLoading(true);

      const pathname = name ? `/api/persons/${encodeURIComponent(name)}` : "/api/persons";
      const response = await fetch(`${pathname}?page=${page}`);
      const data = (await response.json()) as PersonsApiResponse;

      setPersons(data.persons ?? []);
      setPagination(data.pagination ?? {});
      setLoading(false);
    };

    load();
  }, [page, name, router.isReady]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextName = searchInput.trim();
    setName(nextName);
    setPage(1);

    if (nextName) {
      router.replace(`/search?name=${encodeURIComponent(nextName)}`, undefined, { shallow: true });
      return;
    }

    router.replace("/search", undefined, { shallow: true });
  }

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSearch}>
          <Logo />
          <Input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        </Form>
        <Col>
          {!loading ? (
            <>
              <Title>Resultado</Title>
              <Description>
                {`${persons.length} ${persons.length > 1 ? "personagens encontrados" : "personagem encontrado"}.`}
              </Description>
            </>
          ) : (
            <Title>Carregando...</Title>
          )}
        </Col>
        <List>
          <Col>
            {!loading &&
              persons.map((person, index) => (
                <Person key={`${person.name}-${index}`} name={person.name} gender={person.gender} data={person} />
              ))}
          </Col>
        </List>
        <Footer>
          <Button onClick={() => router.push("/")}>Home</Button>
          <ButtonContainer>
            {!loading && pagination.previous && (
              <Button
                onClick={() => {
                  setPage((oldPage) => Math.max(oldPage - 1, 1));
                }}
              >
                Voltar
              </Button>
            )}
            {!loading && pagination.next && (
              <Button
                onClick={() => {
                  setPage((oldPage) => oldPage + 1);
                }}
              >
                Proximo
              </Button>
            )}
          </ButtonContainer>
        </Footer>
      </Row>
    </Container>
  );
}
