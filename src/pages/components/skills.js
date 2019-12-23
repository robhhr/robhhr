import React from "react"
import { css } from "@emotion/core"

const Skills = props => {
  return (
    <img
      src={props.skill}
      alt={props.alt}
      css={css`
        max-width: 75px;
        width: 75px;
        max-height: 75px;
        height: 75px;
        margin: 15px auto;
        filter: grayscale(35%);
        @media (min-width: 850px) {
          max-width: 85px;
          max-height: 85px;
          filter: grayscale(65%);
          margin: 20px 0;
          &:hover {
            filter: grayscale(0%);
          }
        }
      `}
    />
  )
}

export default Skills
