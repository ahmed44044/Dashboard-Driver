import React from 'react'

export default function Navbar({setActiveTab,activeTab}) {
  return (
    <>
      <nav className="bg-white border-bottom shadow-sm">
  <div className="container" style={{ maxWidth: '1200px' }}>
    <ul className="nav nav-tabs border-0">
      {['dashboard', 'add-driver', 'add-route'].map(tab => (
        <li className="nav-item" key={tab}>
          <button
            className={`nav-link d-flex align-items-center gap-2 px-4 py-3 fw-semibold ${
              activeTab === tab ? 'active text-primary border-primary border-bottom-2' : 'text-muted'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'dashboard' && <>📊 <span>Dashboard</span></>}
            {tab === 'add-driver' && <>👤 <span>Add Driver</span></>}
            {tab === 'add-route' && <>🗺️ <span>Add Route</span></>}
          </button>
        </li>
      ))}
    </ul>
  </div>
</nav>


    </>
  )
}
