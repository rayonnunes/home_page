import styled from 'styled-components'
import { ColorProps } from '../../../assets/colors/types'

const Header = styled.div`
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }: { theme: ColorProps }) => theme.disabled};
  & a {
    text-decoration: none;
  }
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
  }
`
const Job = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const JobBody = styled.div`
  margin: 8px 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
  }

`

const JobDescription = styled.div`
  align-self: flex-start;
  line-height: 1.5rem;
  & h4 {
    color: ${({ theme }: { theme: ColorProps }) => theme.secondary};
    font-size: 1.2rem;
    font-weight: 600;
  }
  & ul {
    border-left-width: 1px;
    border-left-color: #000;
  }
  & p {
    color: ${({ theme }: { theme: ColorProps }) => theme.disabled};
    margin: 4px;
    font-size: 12px;
    font-weight: 300;
  }
`
const BusinessLogo = styled.img`
  height: 72px;
  align-self: center;
  margin: 1.6rem 1rem 1.6rem 0;
`
const JobTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 6px;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`
const GithubLogo = styled.img`
  width: 120px;
  align-self: center;
`

const Exp = {
  Wrapper,
  Header,
  Job,
  JobBody,
  JobDescription,
  BusinessLogo,
  JobTechs,
  Icon,
  Footer,
  GithubLogo,
}

export default Exp
