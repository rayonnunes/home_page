import React from 'react'
import { useTranslation } from 'react-i18next';
import Nav from './styles'
import logo from '../../../assets/images/logo.png'
import brFlag from '../../../assets/images/icons/br.png'
import usFlag from '../../../assets/images/icons/us.png'
import sunIcon from '../../../assets/images/icons/sun.png'
import moonIcon from '../../../assets/images/icons/moon.png'
const NavbarComponent = ({ onToggleTheme, theme }: { onToggleTheme: any, theme: string }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (location: 'ptBr' | 'en' ) => {
    i18n.changeLanguage(location);
  }
  return (
    <Nav.Header>
      <Nav.StyledLink to="/">
        <Nav.Logo src={logo} />
      </Nav.StyledLink>
      <Nav.Navbar>
        <Nav.UList>
          <Nav.ListItem>
            <Nav.ListButton onClick={() => changeLanguage('ptBr')}>
              <Nav.Flag
                src={brFlag}
                title={t('Change to Portuguese')}
                alt={t('Change to Portuguese')}
              />
            </Nav.ListButton>
          </Nav.ListItem>
          <Nav.ListItem>
            <Nav.ListButton onClick={() => changeLanguage('en')}>
              <Nav.Flag
                src={usFlag}
                title={t('Change to English')}
                alt={t('Change to English')}
              />
            </Nav.ListButton>
          </Nav.ListItem>
        </Nav.UList>
      </Nav.Navbar>
      <Nav.ListButton onClick={() => onToggleTheme()}>
        <Nav.ThemeIcon
          src={theme === 'light' ? moonIcon : sunIcon}
          title={theme === 'light' ? t('Dark Mode') : t('Light Mode')}
          alt={theme === 'light' ? t('Dark Mode') : t('Light Mode')}
        />
      </Nav.ListButton>
    </Nav.Header>
  )
}

export default NavbarComponent