
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({setActiveTab,activeTab}) {
   const tabs = [
    { key: "dashboard", path: "/", icon: "📊", label: "Dashboard" },
    { key: "calendar", path: "/calendar", icon: "📅", label: "Calendar" },
    { key: "add-driver", path: "/add-driver", icon: "👤", label: "Add Driver" },
    { key: "add-route", path: "/add-route", icon: "🗺️", label: "Add Route" }
  ];
  return (
  
      <nav className="bg-white border-bottom shadow-sm">
  <div className="container" style={{ maxWidth: '1200px' }}>
    <ul className="nav nav-tabs border-0">
      {tabs.map((tab)=>(
          <li className='nav-item' key={tab.key}>
            <Link to={tab.path}
              className={`nav-link d-flex align-items-center gap-2 px-4 py-3 fw-semibold ${ activeTab === tab.key ? 'active text-primary border-primary border-bottom-2' : 'text-muted'}`}
              onClick={() => setActiveTab(tab.key)}
            >
               {tab.icon} <span>{tab.label}</span>
            </Link>
       </li>
      ))}

    </ul>
  </div>
</nav>


    
  )
}
