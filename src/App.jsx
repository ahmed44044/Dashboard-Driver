import React, { useState } from 'react';
import AddDriver from './Components/AddDriver/Adddriver';
import AddRoute from './Components/AddRouter/AddRoute';
import RoutesList from './Components/RoutersList/RoutesList';
import Drivers from './Components/DriversList/Drivers';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import CalendarView from './Components/CalendarView/CalendarView';

// Simple data structures
const initialDrivers = [
  {
    id: 1,
    name: 'Ahmed Mahmoud',
    email: 'ahmedmahmoud@company.com',
    phone: '01201023456',
    status: 'available'
  },
  {
    id: 2,
    name: 'Ahmed Ali',
    email: 'ahmedali@company.com',
    phone: '011122334',
    status: 'assigned'
  },
  {
    id: 3,
    name: 'Sama Ahmed',
    email: 'samaahmed@company.com',
    phone: '01550022567',
    status: 'available'
  },
  {
    id: 4,
    name: 'Mohamed Ahmed',
    email: 'mohamed12@company.com',
    phone: '01000022567',
    status: 'available'
  }
  ,
  {
    id: 5,
    name: 'Ahmed Sayed',
    email: 'ahmedsayed@gmail.com',
    phone: '0122200999',
    status: 'available'
  }
];

const initialRoutes = [
  {
    id: 1,
    name: 'Downtown Route',
    origin: 'Central Station',
    destination: 'Business District',
    date: '2025-9-24',
    time: '08:00',
    driverId: 2,
    status: 'assigned'
  },
  {
    id: 2,
    name: 'Airport Shuttle',
    origin: 'Hotel Plaza',
    destination: 'Airport Terminal',
    date: '2025-10-5',
    time: '14:30',
    driverId: null,
    status: 'unassigned'
  },
  {
    id: 3,
    name: 'School Route',
    origin: '6th Octobar Area',
    destination: 'High School',
    date: '2025-9-26',
    time: '07:15',
    driverId: null,
    status: 'unassigned'
  },
  {
    id: 4,
    name: 'Alex Route',
    origin: 'Cairo',
    destination: 'Alex',
    date: '2025-10-20',
    time: '4:30',
    driverId: null,
    status: 'unassigned'
  },
  {
    id: 5,
    name: 'Shopping Mall Express',
    origin: 'Residential District',
    destination: 'Westfield Mall',
    date: '2025-01-28',
    time: '11:00',
    driverId: null,
    status: 'unassigned'
  },
  {
    id: 6,
    name: 'University Shuttle',
    origin: 'Downtown Terminal',
    destination: 'State University',
    date: '2025-01-29',
    time: '06:45',
    driverId: 3,
    status: 'assigned'
  },
  {
    id: 7,
    name: 'Evening Commuter',
    origin: 'Business Park',
    destination: 'Train Station',
    date: '2025-01-29',
    time: '17:30',
    driverId: null,
    status: 'unassigned'
  },
  {
    id: 8,
    name: 'Weekend Recreation',
    origin: 'Community Center',
    destination: 'City Park',
    date: '2025-02-01',
    time: '10:00',
    driverId: null,
    status: 'unassigned'
  },
  {
    id: 9,
    name: 'Morning Corporate',
    origin: 'Hotel District',
    destination: 'Convention Center',
    date: '2025-02-03',
    time: '08:30',
    driverId: 2,
    status: 'assigned'
  },
  {
    id: 10,
    name: 'Afternoon Special',
    origin: 'Library',
    destination: 'Cultural Center',
    date: '2025-10-25',
    time: '13:15',
    driverId: null,
    status: 'unassigned'
  }
];

export default function App() {

  const [drivers, setDrivers] = useState(initialDrivers);
  const [routes, setRoutes] = useState(initialRoutes);
  const [activeTab, setActiveTab] = useState('dashboard');


  // Assign driver to route
  const assignDriver = (routeId, driverId) => {
    setRoutes(routes.map(route => 
      route.id === routeId 
        ? { ...route, driverId: parseInt(driverId), status: 'assigned' }
        : route
    ));
    
    setDrivers(drivers.map(driver => 
      driver.id === parseInt(driverId)
        ? { ...driver, status: 'assigned' }
        : driver
    ));
  };

  // Unassign driver from route
  const unassignDriver = (routeId) => {
    const route = routes.find(r => r.id === routeId);
    if (route && route.driverId) {
      setRoutes(routes.map(r => 
        r.id === routeId 
          ? { ...r, driverId: null, status: 'unassigned' }
          : r
      ));
      
      // Check if driver has other assignments
      const hasOtherRoutes = routes.some(r => r.id !== routeId && r.driverId === route.driverId);
      if (!hasOtherRoutes) {
        setDrivers(drivers.map(d => 
          d.id === route.driverId 
            ? { ...d, status: 'available' }
            : d
        ));
      }
    }
  };

  const getDriverName = (driverId) => {
    const driver = drivers.find(d => d.id === driverId);
    return driver ? driver.name : 'Unknown';
  };

  const availableDrivers = drivers.filter(d => d.status === 'available');
  const assignedRoutes = routes.filter(r => r.status === 'assigned').length;
  const unassignedRoutes = routes.filter(r => r.status === 'unassigned').length;


    let routers=createBrowserRouter([
    {path:'/',element:<Layout assignedRoutes={assignedRoutes} setActiveTab={setActiveTab} unassignedRoutes={unassignedRoutes} setDrivers={setDrivers} setRoutes={setRoutes} activeTab={activeTab} drivers={drivers} routes={routes} getDriverName={getDriverName} unassignDriver={unassignDriver} availableDrivers={availableDrivers} assignDriver={assignDriver}   />,children:[
      {index:true,element:<Dashboard assignedRoutes={assignedRoutes} unassignedRoutes={unassignedRoutes} setDrivers={setDrivers} setRoutes={setRoutes} activeTab={activeTab} drivers={drivers} routes={routes} getDriverName={getDriverName} unassignDriver={unassignDriver} availableDrivers={availableDrivers} assignDriver={assignDriver}/>},
      {path:'/calendar',element:<CalendarView routes={routes} drivers={drivers} assignedRoutes={assignedRoutes} unassignedRoutes={unassignedRoutes} availableDrivers={availableDrivers}/>},
      {path:'/add-driver',element:<AddDriver drivers={drivers} setDrivers={setDrivers}/>},
      {path:'/add-route',element:<AddRoute routes={routes} setRoutes={setRoutes}/>}
    ]}
  ])

  return (

    <RouterProvider router={routers}/>
    

  );
}
