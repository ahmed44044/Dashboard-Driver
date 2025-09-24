import React, { useState } from 'react'

export default function AddDriver({drivers,setDrivers}) {
     const [newDriver, setNewDriver] = useState({ name: '', email: '', phone: '' });
    
      // Add new driver
      const addDriver = (e) => {
        e.preventDefault();
        if (!newDriver.name || !newDriver.email || !newDriver.phone) return;
        
        const driver = {
          id: drivers.length + 1,
          ...newDriver,
          status: 'available'
        };
        
        setDrivers([...drivers, driver]);
        setNewDriver({ name: '', email: '', phone: '' });
      };
  return (
    <>
       <div className="container" style={{ maxWidth: "600px" }}>
  <div className="card shadow-lg border-0 rounded-3">
    <div className="card-header  text-black py-3 rounded-top">
      <h2 className="h5 mb-0">➕ Add New Driver</h2>
    </div>
    <div className="card-body p-4">
      <form onSubmit={addDriver} className="needs-validation" noValidate>
        
        {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Name <span className="text-danger">*</span></label>
          <input
            type="text"
            value={newDriver.name}
            onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
            className="form-control form-control-lg"
            placeholder="Enter driver name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email <span className="text-danger">*</span></label>
          <input
            type="email"
            value={newDriver.email}
            onChange={(e) => setNewDriver({ ...newDriver, email: e.target.value })}
            className="form-control form-control-lg"
            placeholder="Enter email address"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Phone <span className="text-danger">*</span></label>
          <input
            type="tel"
            value={newDriver.phone}
            onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })}
            className="form-control form-control-lg"
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary btn-lg w-100">
          Add Driver
        </button>
      </form>
    </div>
  </div>
</div>


    </>
  )
}
