import { useEffect, useState } from 'react';
import { Movies, Movie } from '../../components/Movies';
import { useSearch } from '../../SearchContext';
import axios from 'axios';

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
} from './styles';
import { useNavigate } from 'react-router-dom';

export function Profile() {

  const { personData } = useSearch();

  const [movies, setMovies] = useState<Movie[]>([]);

  const navigate = useNavigate();

  /**
   * Handle button 'voltar'
   */
  function handleBack() {
    navigate(-1);  // back to previous page
  }

  /**
   * Get gender with emoji in portuguese
   */
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
      <Row>
        <Name>{personData.name}</Name>
        <Button
          onClick={handleBack}
        >
          Voltar
        </Button>
      </Row>
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