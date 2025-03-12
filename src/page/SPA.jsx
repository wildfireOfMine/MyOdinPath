import { Button } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';

const SPA = () => {
  return (
    <>
        <h1>Welcome...</h1>


        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='http://google.com' target='_blank' endIcon={<SendIcon />}>This SPA's repository</Button>
        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='http://google.com' target='_blank' endIcon={<GitHubIcon />}>This is my GitHub profile</Button>
        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='http://google.com' target='_blank' endIcon={<LinkedIn />}>This is my LinkedIn profile</Button>
    </>
  )
}

export default SPA
