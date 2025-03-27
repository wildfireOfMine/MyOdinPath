import { Container, Link, Typography } from '@mui/material'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import React from 'react'
import CustomCard from './CustomCard';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const ListRepositories = () => {
  const { t } = useTranslation();
  const api_key = import.meta.env.VITE_API_KEY;

  return (
    <Container className='containerList'>
        {/* Do the list of it basically */}
        <ul>

          <li>
            <CustomCard 
            image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2Fodin-recipes%2F&format=png`} 
            title="Receipts" 
            description={t('descriptionReceipts')} 
            website="https://wildfireofmine.github.io/odin-recipes/" 
            repository="https://github.com/wildfireOfMine/odin-recipes"/>
          </li>

          <li>
            <CustomCard 
            image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2Fodin-landing-page%2F&format=png`}
            title="Landing Page" 
            description={t('descriptionLandingPage')} 
            website="https://wildfireofmine.github.io/odin-landing-page/" 
            repository="https://github.com/wildfireOfMine/odin-landing-page"/>
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FRock-Papers-Scissors%2F&format=png`} 
              title="Rock, Papers, Scissors" 
              description={t('descriptionRPS')} 
              website="https://wildfireofmine.github.io/Rock-Papers-Scissors/" 
              repository="https://github.com/wildfireOfMine/Rock-Papers-Scissors"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FetchASketch%2F&format=png`} 
              title="Etch-a-Sketch" 
              description={t('descriptionSketch')} 
              website="https://wildfireofmine.github.io/etchASketch/" 
              repository="https://github.com/wildfireOfMine/etchASketch"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fwildfireofmine.github.io%2FCalculator%2F&format=png`} 
              title="Calculator" 
              description={t('descriptionCalculator')} 
              website="https://wildfireofmine.github.io/Calculator/" 
              repository="https://github.com/wildfireOfMine/Calculator"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fcv-app-top.vercel.app%2F&format=png`} 
              title="CV Application" 
              description={t('descriptionCV')} 
              website="https://cv-app-top.vercel.app/" 
              repository="https://github.com/wildfireOfMine/CVAppTOP"
            />
          </li>

          <li>
            <CustomCard 
              image={`https://api.apiflash.com/v1/urltoimage?access_key=${api_key}&url=https%3A%2F%2Fmemory-card-nine-chi.vercel.app%2F&format=png`} 
              title="Memory Card" 
              description={t('descriptionMemory')} 
              website="https://memory-card-nine-chi.vercel.app/" 
              repository="https://github.com/wildfireOfMine/MemoryCard"
            />
          </li>
          <li>{t('tbd')}
            <Typography variant='h2'>{t('comingSoon')}</Typography>
          </li>
        </ul>
    </Container>
  )
}

export default ListRepositories
