import { Fragment } from "react";
import type { Movie } from "../../lib/contracts";
import { Container, Title, Description } from "./styles";

interface Props {
  data: Movie[];
}

export function Movies(props: Props) {
  return (
    <Container>
      {props.data.map((movie, index) => {
        const dateUserLocal = new Date(movie.releaseDate.replace(/-/g, "/")).toLocaleDateString();

        return (
          <Fragment key={index}>
            <Title>
              {movie.name} ({dateUserLocal})
            </Title>
            <Description>{movie.description}</Description>
          </Fragment>
        );
      })}
    </Container>
  );
}
