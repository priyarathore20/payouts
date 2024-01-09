import React from 'react'
import { Overview } from './styles'
import { ReactComponent as Arrow } from '../../icons/arrow.svg'
import { data } from '../../data'

const OverviewSection = () => {
  return (
    
    <Overview.Container>
      <Overview.Title>
        <Overview.TitleName>Overview</Overview.TitleName>
        <Overview.Month>Last month <Arrow /></Overview.Month>
      </Overview.Title>

      <Overview.Cards>
        {data.overview.map((item)=> (
          <Overview.Card>
          <Overview.CardLabel>{item.label}</Overview.CardLabel>
          <Overview.CardValue>{item.value}</Overview.CardValue>
          </Overview.Card>
        ))}
      </Overview.Cards>
    </Overview.Container>
  )
}

export default OverviewSection