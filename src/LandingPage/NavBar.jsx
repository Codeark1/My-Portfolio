import React from "react";
import { Anchor, Typography } from "antd";
import "../index.css";

const { Link } = Anchor;
const { Title } = Typography;

const NavBar = () => {
  return (
    <div className="text-white">
      <Title style={  {fontSize:'20px'}}>
        <Anchor direction="horizontal">
          <Link href="#home" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#tech-stack" title="Tech stack" />
          <Link href="#project" title="Project" />
          <Link href="#contact-me" title="Contact" />
        </Anchor>
      </Title>
    </div>
  );
};

export default NavBar;
