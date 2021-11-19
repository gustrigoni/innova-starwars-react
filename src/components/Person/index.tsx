import { useNavigate } from 'react-router-dom';

import {
  Container,
  Name,
  Button,
} from './styles';

import { useSearch } from '../../SearchContext';

interface Props {
  name: string;
  gender: string;
  data: PersonInterface;
}

export interface PersonInterface {
  name: string;
  birth: string;
  gender: string;
  eyeColor: string;
  image: string;
  films?: string[];
}


export function Person(props: Props) {

  const { setPersonData } = useSearch();
  const navigate = useNavigate();

  /**
   * Returns emojis by gender
   */
  function emojiByGender() {
    switch (props.gender.toLocaleLowerCase()) {
      case "male":
        return '👦';
      case "female":
        return '👧';
      case "hermaphrodite":
        return '🦄';
      default:
        return '🤖';
    }
  }

  /**
   * When users click in the button 'visualizar'.
   */
  function handleClick() {
    setPersonData(props.data);
    navigate('/profile');
  }

  return <Container>
    <Name>{emojiByGender()} {props.name}</Name>
    <Button onClick={handleClick}>
      Visualizar
    </Button>
  </Container>
}