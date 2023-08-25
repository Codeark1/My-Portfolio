import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import html from "../Asset/html.svg";
import css from "../Asset/css.svg";
import tailwind from "../Asset/tailwind.svg";
import react from "../Asset/react.svg";
import git from "../Asset/git.svg";
import vscode from "../Asset/vscode.svg";


const Stack = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false, 
    });
  }, []);

  return (
    <div id="tech-stack" className=" h-[100svh] bg-image  flex justify-center items-center px-4 md:px-10">
      <section data-aos="fade-up">
        <div className="leading-10 text-2xl md:text-4xl mt-5">
        <h1 className="text-center font-[poppins-800]">My Tech Stack</h1>
        </div>
        <p className="font-[poppins-600] text-center">Technologies I’ve been working with recently</p>
        <div className="flex justify-center item-center md:gap-4 mt-8 text-center fade-in delay-1000 font-[poppins-500] text-black">
          <figure data-aos="zoom-in" data-aos-delay="300">
          <img src={html} alt="Html logo" />
          </figure>
          <figure data-aos="zoom-in" data-aos-delay="500">
          <img src={css} alt="Css logo" />
          </figure>
          <figure data-aos="zoom-in" data-aos-delay="700">
          <img src={tailwind} alt="Tailwind css log" />
          </figure>
          <figure data-aos="zoom-in" data-aos-delay="900">
          <img src={react} alt="React logo" />
          </figure>
          <figure data-aos="zoom-in" data-aos-delay="1100">
          <img src={git} alt="Git logo" />
          </figure>
          <figure data-aos="zoom-in" data-aos-delay="1300">
          <img src={vscode} alt="Vs code logo" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Stack;
