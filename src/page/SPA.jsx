import { Button, Slide } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';

const SPA = () => {
  return (
    <>
        <h2>Welcome...</h2>
        <h1>My Odin Path</h1>
        <ul>
          <li>What is This?
            <h2>This is a SPA (Single Page Application) created with the following aims:</h2>
            <ul>
              <li>Gather and collect all my TheOdinProject projects and tasks in a SPA</li>
              <li>Test and practise with React's MUI library</li>
            </ul>
          </li>
        </ul>
        {/* <Slide direction="up" mountOnEnter unmountOnExit> */}
          <h2>Now... Go!</h2>
        {/* </Slide> */}

        <ul>
          <li></li>
        </ul>
        {/* Do the list of it basically */}
        

        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://github.com/wildfireOfMine/MyOdinPath' target='_blank' endIcon={<SendIcon />}>This SPA's repository</Button>
        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://github.com/wildfireOfMine' target='_blank' endIcon={<GitHubIcon />}>This is my GitHub profile</Button>
        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://www.linkedin.com/in/iv%C3%A1n-anguera-moya-981b86319/' target='_blank' endIcon={<LinkedIn />}>This is my LinkedIn profile</Button>
    </>
  )
}

export default SPA
