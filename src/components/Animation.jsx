import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';


const Animation = () => {

    const slideIn = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    `;


  return (
    <Container className='containerAnimation'>
        {/* <Slide direction="up" mountOnEnter unmountOnExit> */}
        <Box 
            className="boxAnimation"
        >
        <Typography variant="h1"
          sx={{
          animation: `${slideIn} 1s ease-out`,
            }}
        >Now... Go!</Typography>
        </Box>
        {/* </Slide> */}
    </Container>
  )
}

export default Animation
