import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(1.5rem + 2vw);
  align-items: center;
  background-color: #0E0E0E;
  user-select: none;
  margin-top: calc(0.2rem + 0.3vw);
  &:first-child {
    margin-top: 0px;
  }
  &:hover {
    background-color: #111111;
    border-left: 3px solid #FFC107;
  }
`;

export const Name = styled.div`
  padding: 0px 0.8rem;
  font-size: calc(0.8rem + 1vw);
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;