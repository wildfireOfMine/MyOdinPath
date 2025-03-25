import { Box, Button, Container } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import { LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container>
        <Box>
            <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://github.com/wildfireOfMine/MyOdinPath' target='_blank' endIcon={<SendIcon />}>This SPA's repository</Button>
            <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://github.com/wildfireOfMine' target='_blank' endIcon={<GitHubIcon />}>This is my GitHub profile</Button>
            <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://www.linkedin.com/in/iv%C3%A1n-anguera-moya-981b86319/' target='_blank' endIcon={<LinkedIn />}>This is my LinkedIn profile</Button>
        </Box>
    </Container>
  )
}

export default Footer
