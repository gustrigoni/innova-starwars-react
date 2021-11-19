import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 25vh;
`;

export const Title = styled.span`
  font-size: 1rem;
  color: #ffffff;
`;

export const Description = styled.span`
  font-size: 0.7rem;
  color: #AAAAAA;
  margin-bottom: 5%;
  &:last-child{
    margin-bottom: 0px;
  }
`;