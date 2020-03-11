import React from "react";
import Flippy, { BackSide, FrontSide } from "react-flippy";
import Img from "gatsby-image";
import { FaGithub as Github, FaBinoculars as Binoculars } from "react-icons/fa";
import StarRatings from 'react-star-ratings';


function Card(props) {
  const { cardTitle, cardSubtitle } = props
  return (
    <div className="project-card">
      <Img
        className="skill-logo"
        fluid={props.image}
        alt={cardTitle}
      />
      <div className="card-body">
        <h3 className="card-title">{cardTitle}</h3>
        <p className="card-text">{cardSubtitle}</p>
        <div className="links">

          <a className="icon" href={props.link} target="_blank">
            <Binoculars />
            <span>See It Here</span>
          </a>

          {props.codeLink ?
            <a className="icon" href={props.codeLink} target="_blank">
              <Github />
              <span>See The Code</span>
            </a>
            : ''
          }
        </div>
      </div>
    </div>
  )
}

export default Card;

export function SkillsCard(props) {
  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={true}
      flipDirection="horizontal"
    >
      <FrontSide>
        <Img
          className="skill-logo"
          fixed={props.image}
          alt={props.title}
        />
      </FrontSide>
      <BackSide>
        <h3 className="card-title">{props.title}</h3>
        <div className="skill-level">
          <p>Comfort + Skill Level:</p>
          <StarRatings
            rating={parseInt(props.skill) / 20}
            starDimension="30px"
            starSpacing="5px"
            starRatedColor={'rgb(107, 178, 32)'}
            starEmptyColor={'rgb(203, 211, 227)'}
          />
        </div>
      </BackSide>
    </Flippy>
  )
}
