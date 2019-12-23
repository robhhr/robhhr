import React from "react"
import { css } from "@emotion/core"

const Skills = props => {
  return (
    <img
      src={props.skill}
      css={css`
        width: 70px;
        height: 100%;
        margin: 15px auto;
        filter: grayscale(35%);
        @media (min-width: 850px) {
          width: 85px;
          height: 100%;
          filter: grayscale(50%);
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
