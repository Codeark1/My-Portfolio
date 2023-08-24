import React from "react";
import { Layout } from "antd";
import pdf from "../Asset/resume/resume.pdf"
const { Sider, Content } = Layout;
const About1 = () => {
  return (
    <div id="about1">
      <Layout className=" h-[100svh]">
        <Sider width={100}>
            <div className=" bg-teal-800 h-[100svh]"></div>
        </Sider>
        <Content className="">
          <h1
            className=" text-black text-center pt-8 font-[poppins-800] font-semibold text-xl md:text-3xl"
    
          >
            {" "}
            About Me{" "}
          </h1>
<div className=" leading-5 p-5 ">

          <p className="font-[poppins-600] text-base md:text-lg  mt-4">
            Hello, I'm David, a passionate front-end developer with a love for
            creating intuitive and visually captivating web experiences. My
            journey into the world of web development began with a simple
            curiosity, but it quickly evolved into a deep-seated passion that
            drives me to learn, create, and grow every day.
          </p>


          <p
          className='font-[poppins-600] text-base md:text-lg  mt-4'
         
       
        >
          I am proficient in HTML, CSS, and JavaScript and react and I stay up-to-date with the latest trends and best practices in front-end development. I have experience working with various libraries and frameworks, enabling me to leverage the full potential of modern web technologies.
        </p>
</div>

        <div
        className='flex flex-col font-[poppins-600] md:flex-row items-center justify-center gap-5 pt-16'
       
      >
        <a href="../"></a>
        <button>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            download="Resume.pdf"
            className=' p-2 rounded-md font-bold hover: border text-white'
          >
            Resume
          </a>
        </button>
      </div>



        </Content>
      </Layout>
    </div>
  );
};

export default About1;
