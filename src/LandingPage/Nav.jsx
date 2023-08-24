import React from 'react'
import {Anchor} from 'antd'
import { ConfigProvider } from 'antd';

const Nav = () => {
  return (
    <>
          <nav className=''>

<Anchor className='' direction='Horizontal' items={[
   {
    key: 'Home',
    href: '#revamp',
    title: 'Home',
  },
  {
    key: 'About',
    href: '#about1',
    title: 'About',
  },
  {
    key: 'Stack',
    href: '#tech-stacks',
    title: 'Stack',
  },
  {
    key: 'Project',
    href: '#project',
    title: 'Projects',
  },
  {
    key: 'Contact',
    href: '#contact-me',
    title: 'Contact',
  },

]} >
  
</Anchor>
          </nav>
         
          </>
  )
}

export default Nav