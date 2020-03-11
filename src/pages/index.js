import React from "react"
import "../styles/style.scss"
import Appbar from "../components/Appbar"
import Intro from "../components/Intro"
import { Helmet } from "react-helmet"

function Index() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Roman Parkhomenko | Software Engineer</title>
      </Helmet>

      <Appbar />
      <Intro />
    </div>
  )
}

export default Index;
