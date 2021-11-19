
import React from 'react';

import {
  Container,
  Name,
  Button,
} from './styles'

interface Props {
  name: string;
  gender: string;
}

export interface PersonInterface {
  name: string;
  birth: string;
  gender: string;
  eyeColor: string;
  films: string[];
  image: string;
}


export function Person(props: Props) {

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

  return <Container>
    <Name>{emojiByGender()} {props.name}</Name>
    <Button>Visualizar</Button>
  </Container>
}