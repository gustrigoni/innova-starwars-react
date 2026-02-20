import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Movies } from "../../components/Movies";
import { useSearch } from "../../SearchContext";
import type { Movie } from "../../lib/contracts";

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
  const { personData } = useSearch();
  const [movies, setMovies] = useState<Movie[]>([]);

  const router = useRouter();

  function handleBack() {
    router.back();
  }

  function translateGender() {
    switch ((personData.gender || "").toLowerCase()) {
      case "male":
        return "👦 masculino";
      case "female":
        return "👧 feminino";
      case "hermaphrodite":
        return "🦄 hermafrodita";
      default:
        return "🤖 nao definido";
    }
  }

  useEffect(() => {
    if (!personData?.name) {
      router.replace("/");
      return;
    }

    const loadMovies = async () => {
      const urls = personData.films ?? [];
      if (urls.length === 0) {
        setMovies([]);
        return;
      }

      const params = new URLSearchParams();
      urls.forEach((url) => params.append("url", url));

      const response = await fetch(`/api/movies?${params.toString()}`);
      const data = (await response.json()) as Movie[];
      setMovies(data);
    };

    loadMovies();
  }, [personData, router]);

  return (
    <Container>
      <Person>
        <Picture
          src={
            personData.image ||
            "https://akabab.github.io/starwars-api/api/id/1.jpg"
          }
        />
        <Row>
          <Name>{personData.name}</Name>
          <Button onClick={handleBack}>Voltar</Button>
        </Row>
      </Person>
      <About>
        <Col>
          <Row>
            <Info label>Ano de nascimento:</Info>
            <Info>🎂 {personData.birth}</Info>
          </Row>
          <Row>
            <Info label>Cor dos olhos:</Info>
            <Info>👀 {personData.eyeColor}</Info>
          </Row>
          <Row>
            <Info label>Genero:</Info>
            <Info>{translateGender()}</Info>
          </Row>
        </Col>
        <Col>
          <Title>📺 Filmes:</Title>
          {movies.length === 0 ? <Info>Carregando...</Info> : <Movies data={movies} />}
        </Col>
      </About>
    </Container>
  );
}
