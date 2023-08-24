import React from "react";
import { Layout } from "antd";
import Typewriter from "typewriter-effect";
import Nav from "./Nav";
import blue from "../Asset/Blue_Tosca_Modern_Game_Logo-removebg-preview.png";
import "../index.css";
import pic from "../Asset/4882404.jpg";

const { Sider, Content, Header } = Layout;
const Revamp = () => {
  return (
    <div id="revamp">
      <Layout className="h-full">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width={100}
          className="h-[100svh]"
        >
          <div className="p-4 h-[10svh] bg-teal-800">
            <img src={blue} alt="" srcset="" />
          </div>
          <div className="flex justify-center items-center h-[90svh] bg-teal-800 shadow-sm">
            <Nav />
          </div>
        </Sider>
        <Content className="  flex justify-center bg-teal-700">
        <main className="grid justify-center w-[80vw] h-[80vh]  shadow-md max-w-screen-xl px-5 md:px-10 py-10 grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
  <div className="flex justify-center items-center text-center md:text-left text-lg md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-0">
    Hi👋 <br/>My name is David
    <br />
    I'm a Front-end Engineer
    <br />I build things for the web
  </div>
  <div className="flex justify-center items-center">
    <img src={pic} alt="" className="w-full h-auto" />
  </div>
</main>

        </Content>
      </Layout>
    </div>
  );
};

export default Revamp;
