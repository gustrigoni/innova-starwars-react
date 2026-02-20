import Link from "next/link";
import styled, { keyframes } from "styled-components";

import { APP_ROUTES } from "../lib/constants";

const twinkle = keyframes`
  0% { opacity: 0.25; transform: scale(0.95); }
  50% { opacity: 0.9; transform: scale(1); }
  100% { opacity: 0.25; transform: scale(0.95); }
`;

const drift = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 193, 7, 0.15),
      transparent 30%
    ),
    radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.1), transparent 35%),
    #020202;
  color: #ffffff;
  overflow: hidden;
  position: relative;
`;

const Stars = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1.5px),
    radial-gradient(circle, rgba(255, 255, 255, 0.6) 1px, transparent 1.5px);
  background-size:
    120px 120px,
    180px 180px;
  background-position:
    20px 30px,
    80px 120px;
  animation: ${twinkle} 6s ease-in-out infinite;
`;

const Card = styled.section`
  width: 100%;
  max-width: 760px;
  border: 1px solid rgba(255, 193, 7, 0.55);
  background: rgba(10, 10, 10, 0.9);
  box-shadow: 0 0 40px rgba(255, 193, 7, 0.12);
  padding: clamp(24px, 5vw, 48px);
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${drift} 4s ease-in-out infinite;
`;

const Code = styled.p`
  margin: 0;
  font-size: clamp(56px, 13vw, 120px);
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #ffc107;
  line-height: 1;
`;

const Title = styled.h1`
  margin: 14px 0 8px;
  font-size: clamp(20px, 4vw, 36px);
`;

const Description = styled.p`
  margin: 0 auto;
  max-width: 560px;
  color: #c2c2c2;
  line-height: 1.5;
`;

const Actions = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const ActionLink = styled(Link)`
  text-decoration: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }
`;

const PrimaryAction = styled(ActionLink)`
  background: #ffc107;
  color: #080808;
`;

const SecondaryAction = styled(ActionLink)`
  border: 1px solid #ffc107;
  color: #ffc107;
  background: transparent;
`;

export default function NotFoundPage() {
  return (
    <Page>
      <Stars />
      <Card>
        <Code>404</Code>
        <Title>You entered the hidden side of the galaxy</Title>
        <Description>
          The page you tried to access does not exist. Return to base or
          continue browsing the character list.
        </Description>

        <Actions>
          <PrimaryAction href={APP_ROUTES.home}>Go to Home</PrimaryAction>
          <SecondaryAction href={APP_ROUTES.search}>
            View Characters
          </SecondaryAction>
        </Actions>
      </Card>
    </Page>
  );
}
