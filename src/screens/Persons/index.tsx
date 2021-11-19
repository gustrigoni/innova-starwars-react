/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Person, PersonInterface } from '../../components/Person';

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
  page: number;
}

interface Pagination {
  next?: true;
  previous?: true;
}

export function Persons() {

  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const [pagination, setPagination] = useState<Pagination>({});
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState(searchParams.get('name'));

  const navigate = useNavigate();

  useEffect(() => {

    console.log('aaa')

    // set loading to true
    setLoading(true);

    // get persons data
    getPersons({
      name: name ? `/${name}` : '',
      page
    });

  }, [page]);

  /**
   * Handle the search
   */
  function handleSearch({ currentTarget }: React.ChangeEvent<HTMLInputElement>) {
    setName(currentTarget.value) //react-hook-form
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

  return (
    <Container>
      <Row>
        <Top>
          <Logo />
          <Input
            onKeyDown={() => {
              setPage(1);
            }}
          />
        </Top>
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
        <Col>
          {!loading && persons.map((person: PersonInterface, index) => {
            return <Person
              key={index}
              name={person.name}
              gender={person.gender}
            />
          })}
        </Col>
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
  );
}