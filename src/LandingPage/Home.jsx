import React from "react";
import Contact from "./Contact";
import Typewriter from "typewriter-effect";
import blue from "../Asset/Blue_Tosca_Modern_Game_Logo-removebg-preview.png";
import NavBar from "./NavBar";
import "../index.css";
import pic from "../Asset/693.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-image" id="home">
    <nav className="  flex items-center justify-between h-16 md:h-20 px-4 md:px-10">
      <div className="hidden md:flex">
        <img src={blue} height={80} width={80} alt="" />
      </div>
      <ul>
        <NavBar />
      </ul>
    </nav>
    <section className="  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:h-80 px-4 md:px-10 py-8">
      <div className=" text-black  font-[poppins 800] md:text-3xl lg: flex justify-center items-center font-semibold">
        <Typewriter
          options={{
            strings: [
              "Hi👋 welcome, my name is David",
              "I'm a Front-end Engineer",
              "I build things for the web",
            ],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor().deleteAll().start();
          }}
        />
      </div>
  
      <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
        <div className="">
          <img
            src={pic}
            alt=""
            className=" md:w- h-32 md:h-60"
          />
        </div>
  
        <div className="mt-3 md:mt-5">
          <Contact />
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Home;
