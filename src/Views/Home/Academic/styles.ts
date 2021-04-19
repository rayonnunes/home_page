import styled from 'styled-components'
import { ColorProps } from '../../../assets/colors/types'

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 1.45rem;
  & h2 {
    font-size: 1.9rem;
    font-weight: 600;
  }
  & h4 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }: { theme: ColorProps }) => theme.primary}
  }
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  line-height: 1.6rem;
  & a {
    text-decoration: none;
  }
  & h3 {
    font-size: 1.42rem;
  }
  & h4 {
    font-size: 1.12rem;
    font-weight: 300
  }
  & h5 {
    font-size: 0.95rem;
    font-weight: 300
  }
  & p {
    color: ${({ theme }: { theme: ColorProps }) => theme.disabled};
    margin: 4px;
    font-size: 12px;
    font-weight: 300;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
  }
`

const CollegeLogo = styled.img`
  width: 128px;
  align-self: center;
  margin: 1.6rem 1rem;
`

const Academy = {
  Header,
  Wrapper,
  CollegeLogo
}

export default Academy
