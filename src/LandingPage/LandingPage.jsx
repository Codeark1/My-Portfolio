import React from "react";
import "../index.css";
import Home from "./Home";
import About from "./About";
import Stack from "./Stack";
import Project from "./Project";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { ConfigProvider } from "antd";


import AOS from "aos";

import { useEffect } from "react";
const LandingPage = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800, // Adjust the animation duration as needed
  //     once: true, // Set to true if you want the animation to occur only once
  //   });
  // }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "white",
        },
      }}
    >
      <div className="">
        <Home />
        <About/>
        <Stack />
        <Project />
        <ContactMe />
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default LandingPage;
