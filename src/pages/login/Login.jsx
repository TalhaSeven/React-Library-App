import React from "react";
import {
  LoginContainer,
  FormContainer,
  StyledInput,
  StyledForm,
  StyledButton,
} from "./Login.style";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser("talha");
    sessionStorage.setItem("user", "talha");
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <h1>LOGIN HERE</h1>
          <StyledInput type="text" placeholder="Enter Username" required />
          <StyledInput type="password" placeholder="Enter Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
