import { Container, Typography } from '@mui/material'
import React from 'react'

const MyIdea = () => {
  return (
    <Container className='containerIdea'>
        <ul>
          <li><Typography variant='h1' fontStyle={'italic'}
                sx={{
                  transition: "color 0.3s ease",
                    '&:hover': {
                    color: "red",
                  },
                }}>What is This?</Typography>
            <Typography variant='h5' fontWeight={'bold'}
              sx={{
                transition: "color 0.3s ease",
                  '&:hover': {
                  color: "black",
                },
              }}>This is a SPA (Single Page Application) created with the following aims:</Typography>
            <ul>
              <li><Typography variant='body1'
              sx={{
                transition: "color 0.3s ease",
                  '&:hover': {
                  color: "black",
                },
              }}>Gather and collect all my TheOdinProject projects and tasks so far done in a SPA</Typography></li>
              <li><Typography variant='body1'
              sx={{
                transition: "color 0.3s ease",
                  '&:hover': {
                  color: "black",
                },
              }}>Test and practise with React's MUI library</Typography></li>
            </ul>
          </li>
        </ul>
    </Container>
  )
}

export default MyIdea
