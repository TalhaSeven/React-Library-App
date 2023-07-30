import styled from "styled-components";
import { Flex } from "../../styles/Flex.style";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;
export const Brand = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.logoColor};
`;

export const MenuLinkContainer = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    max-height: ${({ showMenu }) => (showMenu ? "300px" : "0")};
    width: 100%;
    overflow: hidden;
    transition: all 0.3s ease-in;
  }
`;
export const MenuLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.linkColor};
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
  &.active {
    color: red;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
