import React from 'react'
import styled from 'styled-components'

const StyledProfile = styled.svg`
  stroke: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: all 0.25s linear;
  padding: 1.5px;
  background-color: ${props => props.theme.profileBackground};
`

const Profile = () => {
  return (
    <StyledProfile
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="64.000000pt"
      height="64.000000pt"
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M308 600 c-34 -19 -78 -74 -78 -99 0 -8 13 -11 38 -9 l37 3 17 -80
c9 -44 17 -83 17 -87 1 -5 17 -8 36 -8 28 0 38 -5 47 -25 16 -35 -14 -69 -54
-61 -26 5 -28 3 -28 -24 0 -39 36 -54 100 -45 83 13 130 52 150 127 28 101
-74 291 -170 318 -49 14 -70 12 -112 -10z"
        />
        <path
          d="M165 444 c-30 -15 -41 -40 -61 -135 -8 -38 21 -88 61 -105 39 -16
115 -19 115 -4 0 6 -14 10 -30 10 -43 0 -96 24 -110 50 -7 13 -9 36 -5 54 3
17 8 45 11 62 5 25 14 36 45 49 21 10 39 22 39 27 0 12 -31 9 -65 -8z"
        />
        <path
          d="M370 280 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
        />
        <path
          d="M140 162 c0 -6 9 -14 20 -17 19 -6 20 -12 14 -71 l-7 -64 97 0 c108
0 109 1 77 72 -11 24 -22 51 -25 61 -4 13 -17 17 -59 17 -30 0 -69 3 -86 6
-19 4 -31 2 -31 -4z"
        />
      </g>
    </StyledProfile>
  )
}

export default Profile
