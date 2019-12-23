import React from "react"
import { css } from "@emotion/core"

const Skills = props => {
  return (
    <img
      src={props.skill}
      css={css`
        width: 100px;
        height: 100%;
      `}
    />
  )
}

export default Skills
