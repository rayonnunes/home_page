import styled from 'styled-components'
import { ColorProps } from '../assets/colors/types'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
  background-color: ${({theme}: {theme: ColorProps}) => theme.background};
`

export default MainContainer
