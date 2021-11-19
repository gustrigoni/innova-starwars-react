import {
  Container,
  Row,
  Logo,
  InputContainer,
  Input,
  Button
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
      <Button>ver todos</Button>
    </Container>
  );
}