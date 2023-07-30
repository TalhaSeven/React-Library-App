import styled from "styled-components";
import { Flex } from "../../styles/Flex.style";

export const HeaderContainer = styled(Flex)`
  flex-direction: column;
`;

export const HeaderTitle = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.detailColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.5rem;
  }
`;

export const HeaderForm = styled.form`
  background: ${({ theme }) => theme.colors.headerFormColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 90%;
  }
`;

export const SearchInput = styled.input`
  margin: 8px 0;
  height: 2.6rem;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 10px;
  border: 2px solid black;
  :focus {
    outline: none;
    background-color: white;
  }
`;

export const SelectInput = styled.select`
  margin: 8px 0;
  height: 2.6rem;
  border: 2px solid black;
  background-color: rgb(255, 255, 255, 0.8);
  :focus {
    outline: none;
    background-color: white;
  }
`;

export const HeaderButton = styled.button`
  background-color: #e1f1dd;
  border: 2px solid black;
  margin: 8px 0;
  height: 2.6rem;
  width: 5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.navbarBgColor};
    transition: all 0.3s ease-in;
  }
`;
