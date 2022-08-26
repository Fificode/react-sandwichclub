import React from 'react'
import DashboardRightPart from './DashboardRightPart'

const Dashboard = () => {
  return (
    <div className="absolute top-0 left-[85px]  md:left-[100px] xl:left-[250px] overflow-x-hidden flex flex-col justify-center">
           <DashboardRightPart/>
        </div>
    
  )
}

export default Dashboard