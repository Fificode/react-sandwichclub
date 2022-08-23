import React from 'react'
import DashboardNav from './DashboardNav'
import DashboardLeftPart from './DashboardLeftPart'
import DashboardRightPart from './DashboardRightPart'

const Dashboard = () => {
  return (
    <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <DashboardNav />
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
            <DashboardLeftPart/>
            <DashboardRightPart/>
        </div>
    </div>
  )
}

export default Dashboard