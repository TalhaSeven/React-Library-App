import styled from "styled-components";
import { Flex } from "../../styles/Flex.style";

export const LoginContainer = styled(Flex)`
  height: 95vh;
  background-image: url("https://picsum.photos/1600/900");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.div`
  text-align: center;
  width: 90vw;
  max-width: 25rem;

  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;
export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  margin: 15px 0;
  height: 2.8rem;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  &:focus {
    outline: none;
    background-color: white;
  }
`;
export const StyledForm = styled.form``;

export const StyledButton = styled.button`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  color: ${({ theme }) => theme.colors.logoColor};
  padding: 15px 0;
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
