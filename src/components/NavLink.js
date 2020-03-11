import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function NavLink({ children, to }) {
  return (
    <Link
    paintDrip
    duration={0.5}
    hex="#FF8A00"
      className="nav-link"
      to={to}
      activeStyle={{
        color: "white",
      }}
      style={{
        color: "grey",
      }}
    >
      {children}
    </Link>
  )
}
