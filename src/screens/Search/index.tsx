import {
  useCallback,
  useEffect,
  useMemo,
  useOptimistic,
  useState,
  useTransition,
  type FormEvent,
} from "react";
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

  const [isFetching, setIsFetching] = useState(false);
  const [persons, setPersons] = useState<PersonModel[]>([]);
  const [pagination, setPagination] = useState<Pagination>(EMPTY_PAGINATION);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [isRouting, startRouteTransition] = useTransition();
  const [optimisticSearchTerm, setOptimisticSearchTerm] = useOptimistic(
    searchTerm,
    (_currentValue, nextValue: string) => nextValue,
  );

  const isBusy = isFetching || isRouting;

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
        setIsFetching(true);
        const response = await fetchPersons({ page, name: searchTerm || undefined });

        setPersons(response.persons);
        setPagination(response.pagination);
      } catch (_error) {
        setPersons([]);
        setPagination(EMPTY_PAGINATION);
        toast.error("Could not load characters.");
      } finally {
        setIsFetching(false);
      }
    }

    loadPersons();
  }, [page, searchTerm, router.isReady]);

  const updateSearchRoute = useCallback(
    (term: string) => {
      startRouteTransition(() => {
        if (term) {
          router.replace(`${APP_ROUTES.search}?name=${encodeURIComponent(term)}`, undefined, { shallow: true });
          return;
        }

        router.replace(APP_ROUTES.search, undefined, { shallow: true });
      });
    },
    [router],
  );

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTerm = searchInput.trim();

    setOptimisticSearchTerm(normalizedTerm);
    setSearchTerm(normalizedTerm);
    startRouteTransition(() => {
      setPage(1);
    });
    updateSearchRoute(normalizedTerm);
  }

  const resultDescription = useMemo(() => {
    const suffix = persons.length > 1 ? "characters found" : "character found";
    const scopedSearch = optimisticSearchTerm ? ` for \"${optimisticSearchTerm}\"` : "";

    return `${persons.length} ${suffix}${scopedSearch}.`;
  }, [optimisticSearchTerm, persons.length]);

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSearch}>
          <Logo />
          <Input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        </Form>
        <Col>
          {!isBusy ? (
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
            {!isBusy &&
              persons.map((person) => (
                <Person key={person.name} name={person.name} gender={person.gender} data={person} />
              ))}
          </Col>
        </List>
        <Footer>
          <Button onClick={() => router.push(APP_ROUTES.home)}>Home</Button>
          <ButtonContainer>
            {!isBusy && pagination.previous && (
              <Button
                onClick={() =>
                  startRouteTransition(() => {
                    setPage((oldPage) => Math.max(oldPage - 1, 1));
                  })
                }
              >
                Back
              </Button>
            )}
            {!isBusy && pagination.next && (
              <Button
                onClick={() =>
                  startRouteTransition(() => {
                    setPage((oldPage) => oldPage + 1);
                  })
                }
              >
                Next
              </Button>
            )}
          </ButtonContainer>
        </Footer>
      </Row>
    </Container>
  );
}
