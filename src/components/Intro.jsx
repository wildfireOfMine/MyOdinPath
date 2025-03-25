import { Box, Container, keyframes, Link, Typography } from '@mui/material'
import topImage from "../assets/top.png";
import React from 'react'

const Intro = () => {

    const phantasm = keyframes`
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }      
      50% {
        opacity: 1;
      }
    `;

  return (
    <Container 
        sx={{
          animation: `${phantasm} 1s ease-out`,
        }}
    >
        <Typography variant='h2'>Welcome...</Typography>
        
        <Typography variant='h1'>My Odin Path</Typography>
        <Link href="https://www.theodinproject.com/" target="_blank">
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
          }} 
          alt="The Odin Project's logo"
          src={topImage}
        />
        </Link>

    </Container>
  )
}

export default Intro
