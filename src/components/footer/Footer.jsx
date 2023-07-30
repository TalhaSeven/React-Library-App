import React from "react";
import { lightIcon, darkIcon } from "../../helper/iconData";
import { FooterBtn, FooterContainer } from "./Footer.style";

const Footer = ({ themeSelected, setThemeSelected }) => {
  const handleClick = () => {
    if (themeSelected === "light") {
      setThemeSelected("dark");
    } else {
      setThemeSelected("light");
    }
  };

  return (
    <FooterContainer>
      <FooterBtn onClick={handleClick}>
        {themeSelected === "light" ? <>{lightIcon}</> : <>{darkIcon}</>}
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;
