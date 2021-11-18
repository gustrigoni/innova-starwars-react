import {
  Container,
  Row,
  Logo,
  InputContainer,
  Input,
  Botao
} from './styles';

export function Home() {
  return (
    <Container>
      <Row>
        <Logo />
        <InputContainer>
          <Input />
        </InputContainer>
      </Row>
      <Botao>ver todos</Botao>
    </Container>
  );
}