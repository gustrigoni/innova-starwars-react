import {
  Container,
  Row,
  Logo,
  InputContainer,
  Input,
  Texto
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
      <Texto>ver todos</Texto>
    </Container>
  );
}