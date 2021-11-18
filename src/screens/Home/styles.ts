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
  user-select: none;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const Input = styled.input.attrs({
  placeholder: 'Qual personagem você deseja procurar?'
})`
  width: 100%;
  height: 90%;
  padding: 4% 3%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #FFC107;
  outline: 0;
  border: none;
  font-size: calc(1em - 17%);
  line-height: 1.5;
  ::placeholder {
    color: #555555;
  }
  :focus { }
`;

export const Botao = styled.button`
  text-transform: uppercase;
  background: none;
  border: none;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
`;