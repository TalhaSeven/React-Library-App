import React, { useState } from "react";
import {
  Nav,
  Brand,
  MenuLinkContainer,
  MenuLink,
  HamburgerIcon,
} from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">Seven's Library</Brand>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <MenuLinkContainer showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>

        {currentUser ? (
          <>
            <MenuLink to="/login" onClick={logout}>
              Logout
            </MenuLink>
          </>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </>
        )}
      </MenuLinkContainer>
    </Nav>
  );
};

export default Navbar;
