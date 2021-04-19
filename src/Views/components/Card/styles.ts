import styled from 'styled-components'
import { ColorProps } from '../../../assets/colors/types'

const Container = styled.div`
  margin: 1rem;
  padding: 1.8rem;
  border-radius: 0.85rem;
  background: ${({theme}: {theme: ColorProps}) => theme.backgroundContainer};
  box-shadow: 2px 2px 3px rgba(0,10,20,0.45);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 980px) {
  }
`

const Card = {
  Container,
  Content,
}

export default Card
