import { Button, Link, Slide } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const SPA = () => {
  const api_key = import.meta.env.VITE_API_KEY

  return (
    <>
        <h2></h2>
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

        {/* Do the list of it basically */}
        <ul>
          <li>Receips  <HtmlIcon/> 
            <Link href="https://wildfireofmine.github.io/odin-recipes/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2Fodin-recipes%2F&format=png`} />
            </Link>
          </li>
          <li>Landing Page <CssIcon/> 
            <Link href="https://wildfireofmine.github.io/odin-landing-page/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2Fodin-landing-page%2F&format=png`} />
            </Link>
          </li>
          <li>Rock, Papers, Scissors <JavascriptIcon/> 
            <Link href="https://wildfireofmine.github.io/Rock-Papers-Scissors/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FRock-Papers-Scissors%2F&format=png`} />
            </Link>
          </li>
          <li>Etch-a-Sketch <HtmlIcon/> <CssIcon/> <JavascriptIcon/> 
            <Link href="https://wildfireofmine.github.io/etchASketch/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FetchASketch%2F&format=png`} />
            </Link>
          </li>
          <li>Calculator <HtmlIcon/> <CssIcon/> <JavascriptIcon/> 
            <Link href="https://wildfireofmine.github.io/Calculator/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FetchASketch%2Fhttps%3A%2F%2Fwildfireofmine.github.io%2FCalculator%2F&format=png`} />
            </Link>
          </li>
          <li>CV Application</li>
          <li>Memory Card</li>
        </ul>
        

        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://github.com/wildfireOfMine/MyOdinPath' target='_blank' endIcon={<SendIcon />}>This SPA's repository</Button>
        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://github.com/wildfireOfMine' target='_blank' endIcon={<GitHubIcon />}>This is my GitHub profile</Button>
        <Button sx={{  mt: 1, mr: 1, mb: 1, ml: 1  }} variant="outlined" disableElevation href='https://www.linkedin.com/in/iv%C3%A1n-anguera-moya-981b86319/' target='_blank' endIcon={<LinkedIn />}>This is my LinkedIn profile</Button>
    </>
  )
}

export default SPA
