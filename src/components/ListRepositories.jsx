import { Container, Link, Typography } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import React from 'react'
import CustomCard from './CustomCard';


const ListRepositories = () => {
  const api_key = import.meta.env.VITE_API_KEY;

  return (
    <Container className='containerList'>
        {/* Do the list of it basically */}
        <ul>

          <li>
            <CustomCard 
            image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2Fodin-recipes%2F&format=png`} 
            title="Receipts" 
            description="Test" 
            website="https://wildfireofmine.github.io/odin-recipes/" 
            repository="https://github.com/wildfireOfMine/odin-recipes"/>
          </li>

          <li>
            <CustomCard 
            image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2Fodin-landing-page%2F&format=png`}
            title="Landing Page" 
            description="Test" 
            website="https://wildfireofmine.github.io/odin-landing-page/" 
            repository="Momazo"/>
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FRock-Papers-Scissors%2F&format=png`} 
              title="Rock, Papers, Scissors" 
              description="Test" 
              website="https://wildfireofmine.github.io/Rock-Papers-Scissors/" 
              repository="https://github.com/wildfireOfMine/Rock-Papers-Scissors"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FetchASketch%2F&format=png`} 
              title="Etch-a-Sketch" 
              description="Test" 
              website="https://wildfireofmine.github.io/etchASketch/" 
              repository="https://github.com/wildfireOfMine/etchASketch"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FCalculator%2F&format=png`} 
              title="Calculator" 
              description="Test" 
              website="https://wildfireofmine.github.io/Calculator/" 
              repository="https://github.com/wildfireOfMine/Calculator"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fcv-app-top.vercel.app%2F&format=png`} 
              title="CV Application" 
              description="Test" 
              website="https://cv-app-top.vercel.app/" 
              repository="https://github.com/wildfireOfMine/cv-app"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fmemory-card-nine-chi.vercel.app%2F&format=png`} 
              title="Memory Card" 
              description="Test" 
              website="https://memory-card-nine-chi.vercel.app/" 
              repository="https://github.com/wildfireOfMine/memory-card"
            />
          </li>
          <li>What else?
            <Typography variant='h2'>Coming soon...</Typography>
          </li>
        </ul>
    </Container>
  )
}

export default ListRepositories
