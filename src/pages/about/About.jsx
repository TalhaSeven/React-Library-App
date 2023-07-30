import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/about.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="salih" />
      <InfoContainer>
        <h2>Hi, I'm Talha</h2>
        <h3>I’m currently learning FrontEnd Development Languages.</h3>
        <h4>
          My area of expertise is JS, ReactJS, HTML, CSS, Redux, TypeScript,
          Tailwind, Bootstrap, Sass, Jira, Agile, Git, Medium Writer, Analytical
          Thinking
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          {iconData.map((item) => {
            console.log(item);
            return (
              <a key={item.icon} href={item.href}>
                <Icon
                  icon={item.icon}
                  path={item.path}
                  hoverColor={item.color}
                />
              </a>
            );
          })}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
