import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Logo,
  InputContainer,
  Input,
  Button
} from './styles';

export function Home() {

  const [keyword, setKeyword] = useState<string>('');

  const navigate = useNavigate();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.currentTarget.value);
  }

  function handleSubmit() {
    navigate(`/search?name=${keyword}`);
  }

  return (
    <Container>
      <Row>
        <Logo />
        <InputContainer onSubmit={handleSubmit}>
          <Input
            onChange={handleInput}
          />
        </InputContainer>
      </Row>
      <Button
        onClick={() => navigate('/search')}
      >
        ver todos
      </Button>
    </Container>
  );
}