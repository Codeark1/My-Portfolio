import React from 'react'
import git from "../Asset/github-1.svg"
import twitter from "../Asset/twitter-4.svg"
import gmail from "../Asset/gmail-1.svg"
import linkedin from "../Asset/linkedin-4.svg"
import { Link } from 'react-router-dom'



const Contact = () => {
 
  return (
    <div className=' flex gap-5'>
          <Link to="https://github.com/Codeark1">
            <img src={git} alt="" srcset="" />{" "}
          </Link>
          <Link to="https://twitter.com/@fficial_Devdee">
            <img src={twitter} alt="" srcset="" />{" "}
          </Link>
            <Link to="mailto:ajitenadavid@gmail.com">
            <img src={gmail} alt="" srcset="" />{" "}
          </Link>
          <Link to="www.linkedin.com/in/ajitena-david-76124a1b2">
            <img src={linkedin} alt="" srcset="" />{" "}
          </Link>
          
    </div>
  )
}

export default Contact