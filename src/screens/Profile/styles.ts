import styled, { css } from "styled-components";

interface InfoInterface {
  label?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Person = styled.div`
  width: 765px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;

export const Picture = styled.img`
  background-color: #FFC107;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
`;

export const Name = styled.h1`
  color: #ffffff;
`;

export const About = styled.div`
  width: 765px;
  max-width: 90%;
  height: 640px;
  max-height: 50%;
  border-style: solid;
  border-image-width: 1px;
  border-image-source: linear-gradient(to bottom, #FFC107, rgb(0,0,0));
  border-image-slice: 1;
  background-color: #0A0A0A; 
  background-origin: border-box;
  overflow: auto;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 5% 2% 5%;
  &:last-child {
    padding: 0px 5% 5% 5%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Info = styled.span<InfoInterface>`
  color: #ffffff;
  white-space: nowrap;
  ${(props) => {
    if (props.label) return css`
      color: #FFC107;
      font-weight: bold;
    `;
  }} 
  &:last-child {
    margin-left: 1%;
  }
`;

export const Title = styled.h3`
  color: #FFC107;
  font-size: 1.3rem;
`;