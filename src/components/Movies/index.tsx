
import { Fragment } from 'react';
import {
  Container,
  Title,
  Description,
} from './styles';

export interface Movie {
  name: string;
  description: string;
  releaseDate: string;
}

interface Props {
  data: Movie[];
}

export function Movies(props: Props) {
  return <Container>
    {props.data.map((movie, index) => {

      const dateUserLocal = new Date(movie.releaseDate.replace('-', '/')).toLocaleDateString();

      return <Fragment key={index}>
        <Title>{movie.name} ({dateUserLocal})</Title>
        <Description>{movie.description}</Description>
      </Fragment>
    })}
  </Container>
}