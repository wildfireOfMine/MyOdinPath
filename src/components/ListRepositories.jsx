import { Link } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import React from 'react'

const ListRepositories = () => {
  const api_key = import.meta.env.VITE_API_KEY;

  return (
    <>
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
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FCalculator%2F&format=png`} />
            </Link>
          </li>
          <li>CV Application</li>
            <Link href="https://cv-app-top.vercel.app/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fcv-app-top.vercel.app%2F&format=png`} />
            </Link>
          <li>Memory Card</li>
            <Link href="https://memory-card-nine-chi.vercel.app/">
              <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fmemory-card-nine-chi.vercel.app%2F&format=png`}/>
            </Link>
          <li>What else?
            <h2>Coming soon...</h2>
          </li>
        </ul>
    </>
  )
}

export default ListRepositories
