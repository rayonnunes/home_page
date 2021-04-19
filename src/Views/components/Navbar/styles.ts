import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ColorProps } from '../../../assets/colors/types'
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 10%;
`

const StyledLink = styled(Link)`
  margin-right: auto;
`
const Logo = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
`

const Navbar = styled.nav`
  margin-right: 34px;
`

const UList = styled.ul`
`

const ListItem = styled.li`
  display: inline-block;
  padding: 0 12px;
`

const ListButton = styled.button`
  text-decoration: none;
  transition: all 0.3s ease 0s;
  border: none;
  border-radius: 8px;
  padding: 16px;
  background: transparent;
  &:hover {
    background-color: ${({theme}: {theme: ColorProps}) => theme.buttonHover };
  }
`

const Flag = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 25px;
`

const ThemeIcon = styled.img`
  width: 28px;
  height: 28px;
`


const Nav = {
  Header,
  StyledLink,
  Logo,
  Navbar,
  UList,
  ListItem,
  ListButton,
  Flag,
  ThemeIcon,
}

export default Nav
