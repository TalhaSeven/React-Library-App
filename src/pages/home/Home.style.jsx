import styled from "styled-components";
import { Flex } from "../../styles/Flex.style";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
`;

export const HomeImg = styled(Flex)`
  width: 100%;
  img {
    width: 40rem;
    height: 50vh;
    border-radius: 1rem;
    @media (max-width: 768px) {
      width: 80vw;
    }
  }
`;

export const MainContainer = styled(Flex)``;
