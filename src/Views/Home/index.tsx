import React from 'react'
import Home from './styles'
import Main from './Main';
import Experience from './Experience';
import Academic from './Academic'
import AboutMe from './AboutMe';
import Footer from './Footer';

const HomeView = () => {
  return (
    <Home.Container>
      <Home.Content>
        <Main />
        <Experience />
        <Academic />
        <AboutMe />
        <Footer />
      </Home.Content>
    </Home.Container>
  )
}

export default HomeView
