import React from 'react'

export default function Drivers({drivers,}) {
  return (
    <>
     <div className="card border mb-4" style={{ maxHeight: '700px', overflowY: 'auto' }}>
  <div className="card-body">
    <h2 className="h5 mb-3">Drivers ({drivers.length})</h2>
    <div className="d-flex flex-column gap-3">
      {drivers.map(driver => (
        <div key={driver.id} className="card bg-light border">
          <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h4 className="h6 mb-0">{driver.name}</h4>
              <span
                className={`badge rounded px-2 py-1 small ${
                  driver.status === "available"
                    ? "bg-success-subtle text-success"
                    : "bg-warning-subtle text-warning"
                }`}
              >
                {driver.status}
              </span>
            </div>
            <p className="mb-1 text-muted small">📧 {driver.email}</p>
            <p className="mb-0 text-muted small">📞 {driver.phone}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}
