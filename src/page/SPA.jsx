import React from 'react'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from '../components/Footer';
import ListRepositories from '../components/ListRepositories';
import Animation from '../components/Animation';
import MyIdea from '../components/MyIdea';
import Intro from '../components/Intro';

const SPA = () => {
  return (
    <>
      <Intro/>
      <MyIdea/>
      <Animation/>
      <ListRepositories/>
      <Footer/>
    </>
  )
}

export default SPA
