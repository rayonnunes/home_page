import React from 'react'
import Footer from './styles'
import linkedinIcon from '../../../assets/images/icons/linkedin.png'
import instaIcon from '../../../assets/images/icons/insta.png'
import githubIcon from '../../../assets/images/icons/github.png'

const FooterComponent = () => {

  return (
    <Footer.Wrapper>
      <a href="https://www.linkedin.com/in/rayonnunes/" target="_blank" rel="noreferrer">
        <Footer.SocialIcons src={linkedinIcon} alt=""/>
      </a>
      <a href="https://www.instagram.com/rayonnunes/" target="_blank" rel="noreferrer">
        <Footer.SocialIcons src={instaIcon} alt=""/>
      </a>
      <a href="https://www.github.com/rayonnunes/" target="_blank" rel="noreferrer">
        <Footer.SocialIcons src={githubIcon} alt=""/>
      </a>
    </Footer.Wrapper>
  )
}

export default FooterComponent
