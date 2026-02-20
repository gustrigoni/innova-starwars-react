import type { Movie } from "../../lib/contracts";
import { formatReleaseDate } from "../../lib/formatters";
import { Container, Title, Description } from "./styles";

interface MoviesProps {
  data: Movie[];
}

export function Movies({ data }: MoviesProps) {
  return (
    <Container>
      {data.map((movie) => {
        const movieKey = `${movie.name}-${movie.releaseDate}`;

        return (
          <article key={movieKey}>
            <Title>
              {movie.name} ({formatReleaseDate(movie.releaseDate)})
            </Title>
            <Description>{movie.description}</Description>
          </article>
        );
      })}
    </Container>
  );
}
