import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Animation = () => {
    const { t } = useTranslation();
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
        <Box 
            className="boxAnimation"
        >
        <Typography variant="h1"
          sx={{
          animation: `${slideIn} 1s ease-out`,
          fontFamily: "fantasy",
          transition: "color 0.3s ease",
            '&:hover': {
            color: "black",
          },
            }}
        >{t('animation')}</Typography>
        </Box>
    </Container>
  )
}

export default Animation
