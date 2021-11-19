
import {
  Container,
  Title,
  Description,
} from './styles';

interface Movie {
  name: string;
  description: string;
}

interface Props {
  data: Movie[];
}

export function Movies(props: Props) {
  return <Container>
    {props.data.map(movie => {
      return <>
        <Title>{movie.name}</Title>
        <Description>{movie.description}</Description>
      </>
    })}
  </Container>
}