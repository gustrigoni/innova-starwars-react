import { Person } from '../../components/Person';
import {
  Container,
  Row,
  Top,
  Logo,
  Input,
  Col,
  Title,
  Description,
  Footer,
  Button,
  ButtonContainer,

} from './styles';

export function Search() {
  return (
    <Container>
      <Row>
        <Top>
          <Logo />
          <Input />
        </Top>
        <Col>
          <Title>Resultado</Title>
          <Description>84 personagens encontrados.</Description>
        </Col>
        <Col>
          <Person
            name={`Yoda`}
            gender={'male'}
          />
          <Person
            name={`Yoda`}
            gender={'female'}
          />
          <Person
            name={`Yoda`}
            gender={'n/a'}
          />
        </Col>
        <Footer>
          <Button>Home</Button>
          <ButtonContainer>
            <Button>Voltar</Button>
            <Button>Próximo</Button>
          </ButtonContainer>
        </Footer>
      </Row>
    </Container>
  );
}