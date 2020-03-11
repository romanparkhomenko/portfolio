import React from "react"
import "../styles/style.scss"
import Appbar from "../components/Appbar"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import CodeBlock from "../components/CodeBlock"
import { Document, Page } from 'react-pdf'

function Resume({ data }) {
  // const projectList = data.allProjectsYaml.edges
  const resume = data.allFile.edges[0].node.publicURL;

  return (
    <div className="container">
      <Appbar />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume | Roman Parkhomenko</title>
      </Helmet>

      <h1 className="intro-header" style={{ color: "#0099cc" }}>
        <span>{"//"}</span>
        <span style = {{color : "white"}}>Resume</span>
      </h1>

      <CodeBlock title="renderResume()">
        <div className="resume">
          <Document file={resume}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </CodeBlock>
    </div>
  )
}

export default Resume;

export const query = graphql`
  {
  allFile(filter: {extension: {eq: "pdf"}}) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`
// export const query = graphql`
//   {
//     allMdx {
//       edges {
//         node {
//           title
//           path
//           date(formatString: "MMMM DD, YYYY")
//         }
//       }
//     }
//   }
// `
