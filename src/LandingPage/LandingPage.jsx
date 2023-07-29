import React from "react";
import "../index.css";
import Home from "./Home";
import About from "./About";
import Stack from "./Stack";
import Project from "./Project";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { ConfigProvider } from "antd";
import NavBar from "./NavBar";
import blue from "../Asset/Blue_Tosca_Modern_Game_Logo-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Adjust the animation duration as needed
      once: true, // Set to true if you want the animation to occur only once
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
 
        components: {
          Anchor: {
            fontSize: 17,
          },
        },
      }}
    >
      <div className="bg-image">
        <nav className="  flex items-center justify-between h-20 px-4 md:px-10 ">
          <div>
            <img src={blue} height={100} width={100} alt="" srcset="" />
          </div>
          <ul>
            <NavBar />
          </ul>
        </nav>
        <Home />
        <About data-aos="fade-up" />
        <Stack />
        <Project />
        <ContactMe />
        <Footer/>
      </div>
    </ConfigProvider>
  );
};

export default LandingPage;
