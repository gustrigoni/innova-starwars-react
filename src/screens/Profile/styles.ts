import styled, { css } from "styled-components";

interface InfoInterface {
  label?: boolean;
}

export const Button = styled.button`
  border: none;
  padding: 1% calc(0.4rem + 0.2vw);
  font-weight: bold;
  border-radius: 0.3rem;
  background-color: #ffc107;
  font-size: 0.7rem;
  word-wrap: break-word;
  cursor: pointer;

  &:last-child {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  box-sizing: border-box;
`;

export const Person = styled.div`
  width: 980px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Picture = styled.img`
  background-color: #ffc107;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
  border: 3px solid #1b1b1b;
`;

export const Name = styled.h1`
  color: #ffffff;
  margin: 14px 0;
`;

export const About = styled.div`
  width: 980px;
  max-width: 90%;
  border-style: solid;
  border-image-width: 1px;
  border-image-source: linear-gradient(to bottom, #ffc107, rgb(0, 0, 0));
  border-image-slice: 1;
  background-color: #0a0a0a;
  background-origin: border-box;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  background: #0e0e0e;
  border: 1px solid rgba(255, 193, 7, 0.28);
  border-radius: 8px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  padding: 14px 16px;
  color: #ffc107;
  border-bottom: 1px solid rgba(255, 193, 7, 0.18);
  font-size: 1rem;
  letter-spacing: 0.02em;
`;

export const SectionBody = styled.div`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Info = styled.span<InfoInterface>`
  color: #ffffff;
  ${(props) => {
    if (props.label) {
      return css`
        color: #ffc107;
        font-weight: bold;
        min-width: 100px;
      `;
    }

    return "";
  }}

  &:last-child {
    margin-left: 8px;
  }
`;

export const Title = styled.h3`
  color: #ffc107;
  font-size: 1.3rem;
`;

export const ResourceCard = styled.article`
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #101010;
  border-radius: 8px;
  padding: 12px;
`;

export const ResourceName = styled.h4`
  color: #ffffff;
  margin: 0 0 6px;
  font-size: 0.95rem;
`;

export const ResourceMeta = styled.p`
  margin: 0;
  color: #bdbdbd;
  font-size: 0.8rem;
  line-height: 1.45;
`;

export const EmptyState = styled.span`
  color: #9a9a9a;
  font-size: 0.9rem;
`;
