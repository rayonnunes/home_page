import styled from 'styled-components'
import { ColorProps } from '../../../assets/colors/types'
const Button = styled.button`
  padding: 1rem;
  margin: 18px 12px 18px 0;
  width: 16.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }: { theme: ColorProps }) => theme.inverseTextColor};
  border-radius: 0.5rem;
  border-width: 1px;  
  border-color: ${(
    {
      inverse,
      color,
      theme
    }: {
      inverse: boolean
      color: 'primary' | 'secondary'
      theme: ColorProps
    }) => inverse ? theme[color] : 'transparent'
  };
  background: ${(
    {
      inverse,
      color,
      theme
    }: {
      inverse: boolean
      color: 'primary' | 'secondary'
      theme: ColorProps
    }) => inverse ? 'transparent' : theme[color]
  };
  transition: all 0.3s ease 0s;
  &:hover {
    border-color: ${(
    {
      inverse,
      color,
      theme
    }: {
      inverse: boolean
      color: 'primary' | 'secondary'
      theme: ColorProps
    }) => inverse ? 'transparent' : theme[color] 
  };
  background: ${(
    {
      inverse,
      color,
      theme
    }: {
      inverse: boolean
      color: 'primary' | 'secondary'
      theme: ColorProps
    }) => inverse ? theme[color] : 'transparent'
  };
  color: ${({ theme }: { theme: ColorProps }) => theme.primary};
  }
`

export default Button