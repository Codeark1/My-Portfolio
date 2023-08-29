
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; // Add this import for useEffect
import pdf from "../Asset/resume/resume.pdf"
import "../index.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 800,
      anchorPlacement: 'top-bottom'
    });
  }, []); // Add an empty dependency array to ensure AOS.init runs only once

  return (
    <div className=' bg-image min-h-screen px-4 text-black  md:px-10' id='about'>
      
      <div className='pl-5 pr-5 gap-5 flex flex-col'>
        <h1
          className=' text-black text-center pt-8 font-[poppins-800] font-semibold text-xl md:text-3xl'
          data-aos='fade'
        >
          About Me
        </h1>
        <p
          className='font-[poppins-600] text-base md:text-lg  mt-4'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          Hello, I'm David, a passionate front-end developer with a love for creating intuitive and visually captivating web experiences. My journey into the world of web development began with a simple curiosity, but it quickly evolved into a deep-seated passion that drives me to learn, create, and grow every day.
        </p>

        <p
          className='font-[poppins-600] text-base md:text-lg  mt-4'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          I am proficient in HTML, CSS, and JavaScript and react and I stay up-to-date with the latest trends and best practices in front-end development. I have experience working with various libraries and frameworks, enabling me to leverage the full potential of modern web technologies.
        </p>
      </div>
      <div
        className='flex flex-col font-[poppins-600] md:flex-row items-center justify-center gap-5 pt-16'
        data-aos='fade'
        data-aos-delay='600'
      >
        <a href="../"></a>
        <button>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            download="Resume.pdf"
            className='border-2 border-white p-2 rounded text-black font-bold'
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
