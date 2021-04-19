import styled from 'styled-components'
import { ColorProps } from '../../../assets/colors/types'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 980px) {
    flex-direction: column-reverse
  }
`

const Info = styled.div`
  font-family: sans-serif;
  line-height: 2.6rem;
  & h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }: { theme: ColorProps }) => theme.primary}
  }
  & h4 {
    font-size: 1.4rem;
    font-weight: 400;
  }
  & span {
    color: ${({ theme }: { theme: ColorProps }) => theme.secondary}
  }
  & h5 {
    font-size: 0.85rem;
    font-weight: 300;
  }
  @media (max-width: 980px) {
    text-align:center;
    & h1 {
    font-size: 1.85rem;
  }
  }
`

const Picture = styled.img`
  border-radius: 50%;
  max-width: 33%;
  padding: 8px;
  background-image: linear-gradient(to bottom right, #00BFFF, #0079AF);
  box-shadow: 2px 2px 3px rgba(0,10,20,0.45)
`

const Icon = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 6px;
`

const Main = {
  Content,
  Info,
  Picture,
  Icon,
}
export default Main