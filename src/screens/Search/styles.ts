import styled from "styled-components";
import logo from "./../../assets/images/logo.png"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  width: 765px;
  max-width: 95%;
  height: 840px;
  max-height: 97%;
  border-style: solid;
  border-image-width: 1px;
  border-image-source: linear-gradient(to bottom, #FFC107, rgb(0,0,0));
  border-image-slice: 1;
  background-color: #0A0A0A; 
  background-origin: border-box;
  position: relative;  
  overflow: auto;
`;

export const Top = styled.div`
  width: 100%;
  margin-top: 5%;
  padding: 0px 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 20%;
  max-width: 300px;
  align-self: center;
  user-select: none;
`;

export const Input = styled.input.attrs({
  placeholder: 'Qual personagem você deseja procurar?'
})`
  width: 555px;
  max-width: 70%;
  height: 1px;
  padding: 4% 3%;
  border-radius: 5px;
  background-color: #FFC107;
  outline: 0;
  border: none;
  font-size: 0.9rem;
  ::placeholder {
    color: #555555;
  }
  :focus { }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  padding: 0px 5%;
`;

export const Title = styled.p`
  font-size: 1rem;
  height: 100%;
  color: #ffffff;
  word-wrap: break-word;
  line-height: 1;
`;

export const Description = styled.span`
  font-size: 0.8rem;
  color: #555555;
  word-wrap: break-word;
  line-height: 1;
  margin-top: -0.6rem;
`;

export const Footer = styled.div`
  display: flex;
  padding: 5% 3% 3% 3%;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  border: none;
  padding: 1% calc(0.4rem + 0.2vw);
  font-weight: bold;
  border-radius: 0.3rem;
  background-color: #FFC107;
  font-size: 0.7rem;
  word-wrap: break-word;
  cursor: pointer;
  &:last-child{
    margin-left: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;