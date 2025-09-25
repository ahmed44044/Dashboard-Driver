import React from 'react'

export default function RoutesList({routes,getDriverName,unassignDriver,assignDriver,availableDrivers}) {
  return (
    <>
      <div className="card  shadow-sm border-0 mb-4" style={{ maxHeight: '700px', overflowY: 'auto' }}>
  <div className="card-header bg-white border-0">
    <h2 className="h5 mb-0">🗺️ Routes ({routes.length})</h2>
  </div>
  <div className="card-body">
    <div className="d-flex flex-column gap-3">
      {routes.map(route => (
        <div key={route.id} className="card border bg-light">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h4 className="h6 mb-0">{route.name}</h4>
              <span
                className={`badge rounded-pill px-2 py-1 small ${
                  route.status === "assigned"
                    ? "bg-success-subtle text-success"
                    : "bg-danger-subtle text-danger"
                }`}
              >
                {route.status}
              </span>
            </div>

            <p className="mb-1 text-muted small">
              {route.origin} → {route.destination}
            </p>
            <p className="mb-3 text-muted small">
              {new Date(route.date).toLocaleDateString()} at {route.time}
            </p>

            {route.status === "assigned" ? (
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-success small">
                  👤 {getDriverName(route.driverId)}
                </span>
                <button
                  onClick={() => unassignDriver(route.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Unassign
                </button>
              </div>
            ) : (
              <div>
                {availableDrivers.length > 0 ? (
                  <select
                    onChange={(e) => assignDriver(route.id, e.target.value)}
                    className="form-select form-select-sm"
                    defaultValue=""
                  >
                    <option value="">Select a driver...</option>
                    {availableDrivers.map(driver => (
                      <option key={driver.id} value={driver.id}>
                        {driver.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="alert alert-warning py-2 small mb-0">
                    No available drivers
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}
