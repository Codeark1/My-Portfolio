import React from "react";
import Contact from "./Contact";
import passport from "../Asset/Passport-removebg-preview.png";
import Typewriter from "typewriter-effect";
import "../index.css";

const Home = () => {
  return (
    <div className=" bg-image min-h-screen"id="home">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-80 px-4 md:px-10">
        <div className=" text-white text-2xl md:text-4xl lg:text-5xl flex justify-center items-center font-[poppins-800]">
          <Typewriter
            options={{
              strings: [
                "Hi👋 welcome, my name is David",
                "i am a front end engineer",
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

        <div className="flex flex-col  h-[30rem] justify-center items-center mt-5 md:mt-0">
          <div className="border-4 rounded-[50rem] border-black bg-black">
            <img
              src={passport}
              alt=""
              className="rounded-full object-cover fade-out w-28 md:w-40 lg:w-60"
            />
          </div>
        
          <div className="mt-5">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
