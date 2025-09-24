import React from 'react'

export default function Header({drivers,routes,assignedRoutes}) {
  return (
    <>
      <header className="bg-white border-bottom py-3">
  <div className="container d-flex justify-content-between align-items-center">
    <div>
      <h1 className="h4 mb-1 text-dark">🚐 Driver Scheduling Dashboard</h1>
      <p className="mb-0 text-muted small">Manage drivers, routes and assignments</p>
    </div>

    <div className="d-flex gap-3 small">
      <span className="badge rounded-pill" style={{ backgroundColor: '#e3f2fd', color: '#1976d2' }}>
        {drivers.length} Drivers
      </span>
      <span className="badge rounded-pill" style={{ backgroundColor: '#f3e5f5', color: '#7b1fa2' }}>
        {routes.length} Routes
      </span>
      <span className="badge rounded-pill" style={{ backgroundColor: '#e8f5e8', color: '#388e3c' }}>
        {assignedRoutes} Assigned
      </span>
    </div>
  </div>
</header>

    </>
  )
}
