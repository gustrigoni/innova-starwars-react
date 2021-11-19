import { Movies } from '../../components/Movies';

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
  return <Container>
    <Person>
      <Picture src={'https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png'} />
      <Name>Yoda</Name>
    </Person>
    <About>
      <Col>
        <Row>
          <Info label>Ano de nascimento:</Info>
          <Info>🎂 896BBY</Info>
        </Row>
        <Row >
          <Info label>Cor dos olhos:</Info>
          <Info>👀 blue</Info>
        </Row>
        <Row>
          <Info label>Gênero:</Info>
          <Info>👧 feminino 🤖 não definido</Info>
        </Row>
      </Col>
      <Col>
        <Title>📺 Filmes:</Title>
        <Movies
          data={Array(50).fill({ name: 'aa', description: 'aasdajshd' })}
        />
      </Col>
    </About>
  </Container>
}