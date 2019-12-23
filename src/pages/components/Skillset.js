import React from "react"
import { css } from "@emotion/core"

const Skillset = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: #fff;
        width: 70%;
        height: 100%;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        margin: 25px 0;

        @media (min-width: 850px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
          -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          width: 20%;
          padding: 25px 0;
        }
      `}
    >
      {children}
    </div>
  )
}

export default Skillset
