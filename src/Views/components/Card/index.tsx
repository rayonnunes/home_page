import React from 'react'
import Card from './styles'
const CardComponent = ({ children }: { children: React.ReactNode }) => {

  return (
    <Card.Container>
      <Card.Content>
        {children}
      </Card.Content>
    </Card.Container>
  )
}

export default CardComponent
