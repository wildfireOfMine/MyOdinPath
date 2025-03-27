import { Container, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

const MyIdea = () => {
  const { t } = useTranslation();
  return (
    <Container className='containerIdea'>
        <ul>
          <li><Typography variant='h1' fontStyle={'italic'}
                sx={{
                  transition: "color 0.3s ease",
                    '&:hover': {
                    color: "red",
                  },
                }}>{t('what_is')}</Typography>
            <Typography variant='h5' fontWeight={'bold'}
              sx={{
                transition: "color 0.3s ease",
                  '&:hover': {
                  color: "black",
                },
              }}>{t('SPA')}</Typography>
            <ul>
              <li><Typography variant='body1'
              sx={{
                transition: "color 0.3s ease",
                  '&:hover': {
                  color: "black",
                },
              }}>{t('firstAim')}</Typography></li>
              <li><Typography variant='body1'
              sx={{
                transition: "color 0.3s ease",
                  '&:hover': {
                  color: "black",
                },
              }}>{t('secondAim')}</Typography></li>
            </ul>
          </li>
        </ul>
    </Container>
  )
}

export default MyIdea
