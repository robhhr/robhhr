import React from "react"
import { css } from "@emotion/core"

const Skillset = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.4);
        margin: 25px 0;

        @media (min-width: 850px) {
          margin: 0 auto;
          -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
          width: 25%;
          text-align: center;
          padding: 10px 0;
        }
      `}
    >
      {children}
    </div>
  )
}

export default Skillset
