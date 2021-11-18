import {
  Container,
  Row,
  Logo,
  InputContainer,
  Input,
  Col,
  Title,
  Description,
  Botao
} from './styles';

export function Search() {
  return (
    <Container>
      <Row>
        <Logo />
        <InputContainer>
          <Input />
        </InputContainer>
      </Row>
      <Col>
        <Title>Resultado</Title>
        <Description>84 personagens encontrados.</Description>
      </Col>
      <Col>
        <Row>
          A
        </Row>
      </Col>
    </Container>
  );
}