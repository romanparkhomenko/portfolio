import React from "react"
import NavLink from "./NavLink"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as LinkedIn,
  FaEnvelope as Mail,
} from "react-icons/fa"
import CodeBlock from "./CodeBlock"

export default function Intro() {
  return (
    <div className="intro-container">
      <h1 className="intro-header" style={{ color: "#0099cc" }}>
        <span>{"//"}</span>
        <span style = {{color : "white"}}> Hello, I'm</span>
        <br/>
        <span>{"//"} Roman Parkhomenko.</span>
      </h1>

      <CodeBlock title="renderIntro()">
        <div className="intro">
          <p>I'm a Colorado Springs based Software Engineer and Front End Web Developer focused on creating performant visual identities for projects of all sizes.</p>
        </div>
      </CodeBlock>

      <button className="learn-more"><NavLink to="/projects">learnMoreAboutMe()</NavLink></button>

      <div className="h1 mt-5">
        <a className="mr-5 icon" target="_blank" href="https://twitter.com/Russki_Roman">
          <Twitter />
        </a>
        <a className="mr-5 icon" target="_blank" href="https://www.linkedin.com/in/roman-parkhomenko">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" target="_blank" href="https://github.com/romanparkhomenko">
          <Github />
        </a>
        <a className="mr-5 icon" target="_blank" href="mailto://rsparkhomenko@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
