/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Person, PersonInterface } from '../../components/Person';
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Container,
  Row,
  Form,
  Logo,
  Input,
  Col,
  Title,
  Description,
  List,
  Footer,
  Button,
  ButtonContainer,
} from './styles';

interface PersonsRequestParams {
  name: string | null;
  page: number;
}

interface Pagination {
  next?: true;
  previous?: true;
}

type FormValues = {
  name: string;
};

export function Search() {

  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [pagination, setPagination] = useState<Pagination>({});
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState(searchParams.get('name'));

  const navigate = useNavigate();

  useEffect(() => {

    // set loading to true
    setLoading(true);

    // get persons data
    getPersons({
      name: name ? `/${name}` : '',
      page
    });

  }, [page, name]);

  /**
   * Handle the search
   */
  const handleSearch: SubmitHandler<FormValues> = (data) => {
    setName(data.name)
    setPage(1);
  }

  /**
   * Search Star Wars persons by a keyword
   */
  async function getPersons(params: PersonsRequestParams) {

    const { data } = await axios.get(`/persons${params.name}`, { params: { page: params.page } });

    // remove loading
    setLoading(false);

    // set persons data
    setPersons(data.persons);

    // set pagination information
    setPagination(data.pagination);

  }

  const { register, handleSubmit } = useForm<FormValues>();

  return <Container>
    <Row>
      <Form onSubmit={handleSubmit(handleSearch)}>
        <Logo />
        <Input
          {...register("name")}
        />
      </Form >
      <Col>
        {!loading ?
          <>
            <Title>Resultado</Title>
            <Description>{`${persons.length} ${persons.length > 1 ? 'personagens encontrados' : 'personagem encontrado'}`}.</Description>
          </>
          :
          <>
            <Title>Carregando...</Title>
          </>
        }

      </Col>
      <List>
        <Col>
          {!loading && persons.map((person: PersonInterface, index) => {
            return <Person
              key={index}
              name={person.name}
              gender={person.gender}
              data={person}
            />
          })}
        </Col>
      </List>
      <Footer>
        <Button
          onClick={() => {
            return navigate('/');
          }}
        >
          Home
        </Button>
        <ButtonContainer>
          {!loading && pagination.previous &&
            <Button
              onClick={() => {
                setPage(oldPage => {
                  oldPage--;
                  return oldPage;
                });
              }}
            >
              Voltar
            </Button>
          }
          {!loading && pagination.next &&
            <Button
              onClick={() => {
                setPage(oldPage => {
                  oldPage++;
                  return oldPage;
                });
              }}
            >
              Próximo
            </Button>
          }
        </ButtonContainer>
      </Footer>
    </Row>
  </Container>
}