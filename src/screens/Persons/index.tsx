import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

interface PersonsRequestParams {
  name: string | null;
  page: string | null;
}

export function Persons() {

  const [searchParams] = useSearchParams();

  useEffect(() => {

    // get queries from route
    const name = searchParams.get('name');
    const page = searchParams.get('page');

    // ger all persons
    getPersons({
      name,
      page
    });

    //setSearchParams({
    // ...searchParams,
    // name: 'teste'
    // });

  });

  async function getPersons(params: PersonsRequestParams) {

    const { data } = await axios.get(`/persons/${params.name}`, { params: { page: params.page } });

    console.log(data);

  }

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