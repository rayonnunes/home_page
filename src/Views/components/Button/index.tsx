import React from 'react'
import Button from './styles'

const ButtonComponent = (
  {
    children,
    color = 'primary',
    inverse = false,
  }: {
    children: React.ReactChild | any;
    color?: 'primary' | 'secondary';
    inverse?: boolean | undefined;
  }
) => {

  return (
    <Button color={color} inverse={inverse}>
      { children }
    </Button>
  )
}

export default ButtonComponent
