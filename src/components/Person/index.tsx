
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

export function Person(props: Props) {

  function emojiByGender() {
    switch (props.gender.toLocaleLowerCase()) {
      case "male":
        return '👦';
      case "female":
        return '👧';
      default:
        return '🤖';
    }
  }

  return <Container>
    <Name>{emojiByGender()} {props.name}</Name>
    <Button>Visualizar</Button>
  </Container>
}