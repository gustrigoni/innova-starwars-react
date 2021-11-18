import styled from "styled-components";
import logo from "./../../assets/images/logo.png"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  width: 80%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 90%;
  max-width: 300px;
  align-self: center;
`;

export const Input = styled.input.attrs({
  placeholder: 'Qual personagem você deseja procurar?'
})`
  width: 90%;
  max-width: 490px;
  height: 5vh;
  border-radius: 5px;
  background-color: #FFC107;
  color: #000000;
  font-size: 1.1rem;
  outline: 0;
  border: none;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 0.2vw 1vw;

  ::placeholder {
    color: #555555;
  }
`;