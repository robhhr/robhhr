import React from 'react'

const Project = ({description, live, repo, title}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={repo} target="_blank" rel="noreferrer">
        Source
      </a>
      <a href={live} target="_blank" rel="noreferrer">
        Live
      </a>
    </>
  )
}

export default Project
