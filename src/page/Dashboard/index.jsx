import React from 'react'
import { DashboardStyles } from './styles'
import Sidebar from '../../components/Sidebar'
import MainSection from '../MainSection'

const Dashboard = () => {
  return (
    <DashboardStyles>
        <Sidebar />
        <MainSection />
    </DashboardStyles>
  )
}

export default Dashboard