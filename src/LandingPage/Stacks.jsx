import React from 'react'
import html from "../Asset/html.svg"
import css from "../Asset/css.svg";
import tailwind from "../Asset/tailwind.svg";
import react from "../Asset/react.svg";
import git from "../Asset/git.svg";
import vscode from "../Asset/vscode.svg";
import { Layout } from 'antd'

const {Sider,Content} = Layout

const Stacks = () => {
  return (
    <div id='tech-stacks'>
      <Layout className='h-[100svh]' >
<Sider width={100} style={{backgroundColor:"white"}}>
  <div className=' bg-teal-800 h-[100svh]'></div>
</Sider>
<Content>
<section>
        <div className="leading-10 text-2xl md:text-4xl mt-5">
        <h1 className="text-center font-[poppins-800]">My Tech Stack</h1>
        </div>
        <p className="font-[poppins-600] text-center">Technologies I’ve been working with recently</p>
        <div className="flex justify-center item-center md:gap-4 mt-8 text-center fade-in delay-1000 font-[poppins-500] text-black">
          <figure>
          <img src={html} alt="Html logo" />
          </figure>
          <figure >
          <img src={css} alt="Css logo" />
          </figure>
          <figure>
          <img src={tailwind} alt="Tailwind css log" />
          </figure>
          <figure>
          <img src={react} alt="React logo" />
          </figure>
          <figure>
          <img src={git} alt="Git logo" />
          </figure>
          <figure>
          <img src={vscode} alt="Vs code logo" />
          </figure>
        </div>
      </section>
</Content>
      </Layout>



    </div>
  )
}

export default Stacks