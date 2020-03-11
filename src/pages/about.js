import React from "react";
import "../styles/style.scss";
import Appbar from "../components/Appbar";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import CodeBlock from "../components/CodeBlock";
import Img from "gatsby-image"

function About({data}) {
  console.info(data);
  const headshot = data.allFile.edges[0].node.childImageSharp.fixed;
  return (
    <div className="container about-page">
      <Appbar />

      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Roman Parkhomenko</title>
      </Helmet>

      <h1 className="header" style={{ color: "#0099cc" }}>
        <span>{"//"}</span>
        <span style = {{color : "white"}}> About Me</span>
      </h1>

      <div className="content">
        <CodeBlock title="renderAboutMe()">
          <div className="about-content">
            <div className="text">
              <p>My engineering passions are definitely centered around the front end of the web. There's an incomparable sense of satisfaction after finally seeing hours of work visibly become alive online.</p>
              <p>As a Software Engineer, I’m always looking to challenge my technical knowledge and abilities. I’ve been fortunate enough to develop a skill set through a diverse set of projects ranging from Wordpress development, large scale cloud hosting migration, performance optimization, RESTful applications, and people management.</p>
            </div>

            <div className="headshot-block">
              <Img
                className="headshot"
                fixed={headshot}
                alt={'headshot'}
              />
            </div>
          </div>
        </CodeBlock>

      </div>
    </div>
  )
}

export default About;

export const query = graphql`
{
  allFile(filter: {name: {eq: "headshot"}, extension: {eq: "png"}}) {
    edges {
      node {
        id
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
}
`;
