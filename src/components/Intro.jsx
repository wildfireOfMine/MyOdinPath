import { Box, Container, keyframes, Link, Tooltip, Typography } from '@mui/material'
import topImage from "../assets/top.png";
import React from 'react'
import LanguageSelection from './LanguageSelection';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation();
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

      console.log(i18n.language);

  return (
    <Container 
        sx={{
          animation: `${phantasm} 1s ease-out`,
        }}
        className='containerIntro'
    >
        <Typography variant='h2' fontFamily={'fantasy'} 
        sx={{
          transition: "color 0.3s ease",
            '&:hover': {
            color: "white",
          },
        }}
        >{t('welcome')}</Typography>
        
        <Typography variant='h1' fontWeight={'bold'}
        sx={{
          transition: "color 0.3s ease",
            '&:hover': {
            color: "white",
          },
        }}
        >My Odin Path</Typography>
        
          <Link href="https://www.theodinproject.com/" target="_blank">
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                border: "6px solid grey",
                borderRadius: "90px",
                marginTop: "15px",
                textAlign: "center",
                transition: "border-color 0.3s ease",
                '&:hover': {
                  borderColor: "white",
                },
              }} 
              alt="The Odin Project's logo"
              src={topImage}
            />
          </Link>

          <LanguageSelection />

    </Container>
  )
}

export default Intro
