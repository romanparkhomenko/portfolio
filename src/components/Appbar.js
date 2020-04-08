import React from "react"
import NavLink from "./NavLink"

export default function Appbar() {
  return (
    <div className="container my-3">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </div>
  )
}
