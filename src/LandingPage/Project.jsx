import React from "react";
import img from "../Asset/weather.jpg";
import ip from "../Asset/newip.jpg";
import food from "../Asset/food.jpg";
import age from "../Asset/age.png";
import clock from "../Asset/ClockIn screenshot.png";
import landing from "../Asset/Screenshot (34).png";
import github from "../Asset/github-1.svg";
import link from "../Asset/link 1.svg";

const Project = () => {
  const projects = [
    {
      img: <img src={img} alt="" />,
      title: "WEATHER APP",
      about:
        "ForecastMe, a sleek and user-friendly weather app that keeps you up-to-date with the latest weather conditions in cities. With a modern design and intuitive interface, ForecastMe provides real-time weather information at your fingertips. Stay prepared for any weather ",
      stack: " HTML, CSS, JAVA SCRIPT",
      gitLink: <img src={github} alt="" />,
      link: < a href="https://dainty-meerkat-73504e.netlify.app/"  className="text-blue-500 hover:underline" target="_blank">DEMO</a>,
      git: (
        <a
          href="https://github.com/Codeark1/Age-Calculator.git"rel="noreferrer" target="_blank"
          className="text-blue-500 hover:underline"
        >
          {" "}
          GitHub Repository
        </a>
      ),
      hostLink: "",
      git: (
        <a
          href="https://github.com/Codeark1/Age-Calculator.git" rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          {" "}
          GitHub Repository
        </a>
      ),
    },
    {
      img: <img src={ip} alt="" />,
      title: "IP TRACKER",
      about:
        "Ip Trackris a powerful yet user-friendly IP tracking application designed to provide you with real-time information about the geographical location With just an IP address,",
      stack: "HTML,CSS,JS",
      gitLink: <img src={github} alt="" />,
      hostLink: <img src={link} alt="" />,
      link: < a href="https://zesty-baklava-40c392.netlify.app/"  className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">DEMO</a>,
      git: (
        <a
          href="https://github.com/Codeark1/IP-TRACKER.git"
          className="text-blue-500 hover:underline"
        >
          {" "}
          GitHub Repository
        </a>
      ),
    },
    {
      img: <img src={food} alt="" />,
      title: " A RECEIPE APP",
      about:
        "TastyBites is a user-friendly recipe app designed to cater to all levels of culinary expertise. Whether you're a seasoned chef or a novice cook, our app offers an extensive collection of mouthwatering recipes from around the globe. From classic comfort foods to exotic delicacies, there's something to satisfy every palate.",
      stack: " HTML, CSS,JAVA-SCRIPT",
      gitLink: <img src={github} alt="" />,
      hostLink: <img src={link} alt="" />,
      link: < a href="https://poetic-lolly-d8c8bc.netlify.app/"  className="text-blue-500 hover:underline" target="_blank"rel="noreferrer">DEMO</a>,
      git: (
        <a
          href="https://github.com/Codeark1/Meal-db.git"
          className="text-blue-500 hover:underline"
        >
          {" "}
          GitHub Repository
        </a>
      ),
    },
    {
      img: <img src={age} alt="" />,
      title: "AN AGE CALCULATOR",
      about:
        "The Age Calculator is a user-friendly and versatile tool designed to calculate a person's age based on their birthdate and the current date. Whether you need to determine your own age or calculate someone else's age, this handy application makes the process quick and effortless.",
      stack: " HTML,CSS, JS",
      gitLink: <img src={github} alt=""></img>,
      hostLink:<img src={link} alt="" />,
      link: < a href="https://splendorous-longma-e366a5.netlify.app/"  className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">DEMO</a>,
      git: (
        <a
          href="https://github.com/Codeark1/Age-Calculator.git"
          className="text-blue-500 hover:underline"
        >
          {" "}
          GitHub Repository
        </a>
      ),
    },
    {
      img: <img src={clock} alt="" />,
      title: "STUDENT TIME TRACKER",
      about:
        "TimeEase in an app that understand the importance of efficient time management in a student's academic journey. Our innovative app is designed to simplify the process of recording time-in and time-out for students, empowering them to stay organized, focused, and make the most of their valuable study hours.",
      stack: "REACT JS",
      gitLink: <img src={github} alt="" />,
      link: < a href="https://enchanting-truffle-dc4b83.netlify.app/"  className="text-blue-500 hover:underline" target="_blank"rel="noreferrer">DEMO</a>,
      hostLink: <img src={link} alt="" />,
      git:<a href="https://github.com/Codeark1/student-time-tracker.git" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">GitHub Repository</a>,
    },
    {
      img: <img src={landing} alt="" />,
      title: "A CLONE OF withcompound.com WEBSITE",
      about: " A landing page built with react js ",
      stack: " REACT JS",
      link: < a href="https://splendorous-longma-e366a5.netlify.app/"  className="text-blue-500 hover:underline" target="_blank"rel="noreferrer">DEMO</a>,
      gitLink: <img src={github} alt="" />,
      hostLink: <img src={link} alt="" />,
      git: (
        <a
          href="https://github.com/Codeark1/Age-Calculator.git" target="_blank" rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          {" "}
          GitHub Repository
        </a>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-image" id="project">
      <div className="text-center  leading-10 gap-5 text-2xl md:text-4xl mt-16">
        <h1 className="font-[poppins-800] text-black pt-5">PROJECTS</h1>
        <p className="font-[poppins-600] text-black">Things I have worked on</p>
      </div>
      <section className="grid gap-5 mt-10 pl-5 pr-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-3 border border-black rounded-xl first-letter:text-center font-[poppins-600] text-black break-normal shadow-sm"
          >
            <div className=" ">{project.img}</div>
            <div>TITLE: {project.title}</div>
            <div>ABOUT: {project.about}</div>
            <div>STACK: {project.stack}</div>
            <div className="flex gap-3">
              {project.gitLink} : {project.git}
            </div>
            <div className=" pt-3 flex gap-3">{project.hostLink} : {project.link} </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
