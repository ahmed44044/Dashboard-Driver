import React from 'react'
import RoutesList from '../RoutersList/RoutesList'
import Drivers from '../DriversList/Drivers'
import AddDriver from '../AddDriver/Adddriver'
import AddRoute from '../AddRouter/AddRoute'

export default function Dashboard({assignedRoutes,unassignedRoutes,setDrivers,setRoutes,routes,getDriverName,unassignDriver,assignDriver,availableDrivers,drivers,activeTab}) {
  return (
    <>
     <main className="container py-4">
  {/* Dashboard Tab */}
  {activeTab === 'dashboard' && (
    <div>
      {/* Stats */}
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <div className="card border">
            <div className="card-body">
              <h6 className="text-muted mb-2">Total Routes</h6>
              <p className="h2 mb-0 text-dark">{routes.length}</p>
              <div className="mt-2 small">
                <span className="text-success">{assignedRoutes} assigned</span>
                {" • "}
                <span className="text-danger">{unassignedRoutes} unassigned</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border">
            <div className="card-body">
              <h6 className="text-muted mb-2">Available Drivers</h6>
              <p className="h2 mb-0 text-dark">{availableDrivers.length}</p>
              <div className="mt-2 small text-muted">
                out of {drivers.length} total drivers
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border">
            <div className="card-body">
              <h6 className="text-muted mb-2">Assignment Rate</h6>
              <p className="h2 mb-0 text-dark">
                {routes.length > 0
                  ? Math.round((assignedRoutes / routes.length) * 100)
                  : 0}%
              </p>
              <div className="mt-2 small text-muted">routes with drivers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Routes and Drivers */}
      <div className="row g-4">
        <div className="col-md-6">
          <RoutesList
            routes={routes}
            getDriverName={getDriverName}
            unassignDriver={unassignDriver}
            availableDrivers={availableDrivers}
            assignDriver={assignDriver}
          />
        </div>

        <div className="col-md-6">
          <Drivers drivers={drivers} />
        </div>
      </div>
    </div>
  )}

  {/* Add Driver Tab */}
  {activeTab === 'add-driver' && (
    <AddDriver drivers={drivers} setDrivers={setDrivers} />
  )}

  {/* Add Route Tab */}
  {activeTab === 'add-route' && (
    <AddRoute routes={routes} setRoutes={setRoutes} />
  )}
</main>

    </>
  )
}
