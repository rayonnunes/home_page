import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from '../Routes'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import MainContainer from './styles'
import themeColors from '../assets/colors'
import GlobalStyle from '../config/globalStyle'
const Views = () => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')
  const [themeSchema, setThemeSchema] = useState(themeColors.light)
  const toggleTheme = () => {
    if(themeName === 'light') {
      setThemeName('dark')
      setThemeSchema(themeColors.dark)
    } else {
      setThemeName('light')
      setThemeSchema(themeColors.light)
    }
  }
  return (
    <ThemeProvider theme={themeSchema}>
      <GlobalStyle />
        <Router>
          <MainContainer>
            <Navbar theme={themeName} onToggleTheme={() => toggleTheme()} />
            <Routes />
          </MainContainer>
        </Router>
    </ThemeProvider>
  )
}

export default Views
