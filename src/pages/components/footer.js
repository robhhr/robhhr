import React from "react"
import { css } from "@emotion/core"
import "font-awesome/css/font-awesome.min.css"

const Footer = () => {
  return (
    <footer
      css={css`
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        padding: 10px 0;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.04);
        background-color: #fff;
      `}
    >
      <ul
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          padding: 0;
          margin: 0 auto;
          width: 100%;
        `}
      >
        <li>
          <a
            className="fa fa-github"
            href="https://github.com/robhhr"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>

        <li>
          <a className="fa fa-envelope" href="mailto:robhhr@outlook.com" />
        </li>
        <li>
          <a
            className="fa fa-linkedin"
            href="https://linkedin.com/in/robertohhr"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
