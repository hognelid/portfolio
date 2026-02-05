import React from 'react'
import { GdsCard, GdsText, GdsButton } from '@sebgroup/green-core/react'

const GreenCard: React.FC = () => {
  return (
    <GdsCard padding="s" width="320px" variant="tertiary">
      <GdsText>
        <strong>Green Card</strong>
      </GdsText>
      <GdsText>
        A simple card built using only Green Design System components.
      </GdsText>
      <GdsButton>Learn more</GdsButton>
    </GdsCard>
  )
}

export default GreenCard
