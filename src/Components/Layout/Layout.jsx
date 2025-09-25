import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout({assignedRoutes,setActiveTab,unassignedRoutes,setDrivers,setRoutes,routes,getDriverName,unassignDriver,assignDriver,availableDrivers,drivers,activeTab}) {
  return (
    
     <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
          {/* Header */}
      
      <Header routes={routes} drivers={drivers} assignedRoutes={assignedRoutes} />
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab}/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}
