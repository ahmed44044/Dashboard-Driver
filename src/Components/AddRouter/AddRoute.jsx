import React, { useState } from 'react'

export default function AddRoute({routes,setRoutes}) {
      const [newRoute, setNewRoute] = useState({ name: '', origin: '', destination: '', date: '', time: '' });
        const addRoute = (e) => {
    e.preventDefault();
    if (!newRoute.name || !newRoute.origin || !newRoute.destination || !newRoute.date || !newRoute.time) return;
    
    const route = {
      id: routes.length + 1,
      ...newRoute,
      driverId: null,
      status: 'unassigned'
    };
    
    setRoutes([...routes, route]);
    setNewRoute({ name: '', origin: '', destination: '', date: '', time: '' });
  };
    
  return (
    <>
     <div className="container" style={{ maxWidth: "600px" }}>
  <div className="card shadow-lg border-0 rounded-3">
    <div className="card-header  text-black py-3 rounded-top">
      <h2 className="h5 mb-0">➕ Add New Route</h2>
    </div>
    <div className="card-body p-4">
      <form onSubmit={addRoute} className="needs-validation" noValidate>
        
        {/* Route Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Route Name <span className="text-danger">*</span></label>
          <input
            type="text"
            value={newRoute.name}
            onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })}
            className="form-control form-control-lg"
            placeholder="Enter route name"
            required
          />
        </div>

        {/* Origin + Destination */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Origin <span className="text-danger">*</span></label>
            <input
              type="text"
              value={newRoute.origin}
              onChange={(e) => setNewRoute({ ...newRoute, origin: e.target.value })}
              className="form-control form-control-lg"
              placeholder="Starting location"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Destination <span className="text-danger">*</span></label>
            <input
              type="text"
              value={newRoute.destination}
              onChange={(e) => setNewRoute({ ...newRoute, destination: e.target.value })}
              className="form-control form-control-lg"
              placeholder="End location"
              required
            />
          </div>
        </div>

        {/* Date + Time */}
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label fw-semibold">Date <span className="text-danger">*</span></label>
            <input
              type="date"
              value={newRoute.date}
              onChange={(e) => setNewRoute({ ...newRoute, date: e.target.value })}
              className="form-control form-control-lg"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">Time <span className="text-danger">*</span></label>
            <input
              type="time"
              value={newRoute.time}
              onChange={(e) => setNewRoute({ ...newRoute, time: e.target.value })}
              className="form-control form-control-lg"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Add Route
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  )
}
