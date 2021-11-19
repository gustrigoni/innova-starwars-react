import { useEffect, useState } from 'react';
import { Movies, Movie } from '../../components/Movies';
import { useSearch } from '../../SearchContext';
import axios from 'axios';

import {
  Container,
  Person,
  Picture,
  Name,
  About,
  Col,
  Row,
  Info,
  Title,
} from './styles';

export function Profile() {

  const { personData } = useSearch();

  const [movies, setMovies] = useState<Movie[]>([]);

  function translateGender() {
    switch (personData.gender.toLocaleLowerCase()) {
      case "male":
        return '👦 masculino';
      case "female":
        return '👧 feminino';
      case "hermaphrodite":
        return '🦄 hermafrodita';
      default:
        return '🤖 não definido';
    }
  }

  /**
   * Get movies data by person
   */
  async function getMovies() {

    // search movies by person
    const { data } = await axios.get('/movies', {
      params: {
        url: personData.films
      }
    });

    // define the movies data
    setMovies(data);

  }

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, [personData])

  return <Container>
    <Person>
      <Picture src={personData.image || 'https://bestprofilepictures.com/wp-content/uploads/2020/06/Mandalorian-Tik-Tok-Profile-Picture.jpg'} />
      <Name>{personData.name}</Name>
    </Person>
    <About>
      <Col>
        <Row>
          <Info label={true}>Ano de nascimento:</Info>
          <Info>🎂 {personData.birth}</Info>
        </Row>
        <Row >
          <Info label={true}>Cor dos olhos:</Info>
          <Info>👀 {personData.eyeColor}</Info>
        </Row>
        <Row>
          <Info label={true}>Gênero:</Info>
          <Info>{translateGender()}</Info>
        </Row>
      </Col>
      <Col>
        <Title>📺 Filmes:</Title>
        {movies.length === 0 ? <Info>Carregando...</Info> : <Movies data={movies} />}
      </Col>
    </About>
  </Container>
}