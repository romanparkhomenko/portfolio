import React from "react";
import "../styles/style.scss";
import Appbar from "../components/Appbar";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import CodeBlock from "../components/CodeBlock";
import Card, {SkillsCard} from "../components/Card"

function Portfolio({ data }) {
  const skillsList = data.allSkillsYaml.edges;
  const projectList = data.allProjectsYaml.edges;

  return (
    <div className="container portfolio-page">
      <Appbar />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Roman Parkhomenko</title>
      </Helmet>

      <h1 className="header" style={{ color: "#0099cc" }}>
        <span>{"//"}</span>
        <span style = {{color : "white"}}> Portfolio</span>
      </h1>

      <div className="content">
        <CodeBlock title="renderProjects()">
          <p className="description">Here are some of the most recent things I've worked on!</p>
          <div className="projects">
            {projectList.map(({ node }) => {
              return (
                <Card
                  cardTitle={node.title}
                  cardSubtitle={node.subtitle}
                  image={node.childFileYaml.childImageSharp.fluid}
                  link={node.link}
                  codeLink={node.codeLink}
                  key={node.id}
                  banner={node.banner ? node.banner : null}
                />
              )
            })}
          </div>
        </CodeBlock>

        <CodeBlock title="renderSkills()">
          <p className="description">These are some of the skills I've gotten to develop over the years.</p>
          <div className="skills">
            {skillsList.map(({ node }) => {
              return (
                <SkillsCard
                  title={node.title}
                  image={node.childFileYaml.childImageSharp.fixed}
                  key={node.id}
                  skill={node.skill}
                />
              )
            })}
          </div>
        </CodeBlock>

      </div>
    </div>
  )
}

export default Portfolio;

export const query = graphql`
  {
    allSkillsYaml {
      edges {
        node {
          childFileYaml {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          skill
          id
        }
      }
    }
    allProjectsYaml {
      edges {
        node {
          childFileYaml {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
          link
          codeLink
          id
          banner
        }
      }
    }
  }
`;
