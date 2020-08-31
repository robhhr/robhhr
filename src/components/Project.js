import React from 'react'

const Project = ({description, repo, title}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={repo} />
    </>
  )
}

export default Project
