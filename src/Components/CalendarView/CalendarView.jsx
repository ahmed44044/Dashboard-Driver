
import React, { useState } from 'react'

export default function CalendarView({routes,drivers,assignedRoutes,unassignedRoutes,availableDrivers}) {
    const [currentDate, setCurrentDate] = useState(new Date());
     const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getRoutesForDate = (date) => {
    const dateString = formatDate(date);
  
    return routes.filter(route => route.date === dateString);
    
  };

  const getAvailableDriversForDate = (date) => {
    const dateString = formatDate(date);
    const routesOnDate = getRoutesForDate(date);
    const assignedDriverIds = routesOnDate
      .filter(route => route.driverId)
      .map(route => route.driverId);
    
    return drivers.filter(driver => !assignedDriverIds.includes(driver.id));
  };

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

    const calendarDays = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      calendarDays.push(date);
    }
    return calendarDays;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 return (
  <div className="container my-4">
    {/* Calendar Header */}
    <div className="card mb-4">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h2 className="h5 mb-1">📅 Driver Availability Calendar</h2>
          <p className="text-muted small mb-0">
            View driver availability and route assignments by date
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button onClick={() => navigateMonth('prev')} className="btn btn-outline-primary btn-sm">
            ← Previous
          </button>
          <div className="px-3 fw-bold text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <button onClick={() => navigateMonth('next')} className="btn btn-outline-primary btn-sm">
            Next →
          </button>
        </div>
      </div>
    </div>

    {/* Calendar Grid */}
    <div className="card">
      {/* Day Headers */}
      <div className="d-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
        {dayNames.map((day) => (
          <div key={day} className="text-center small fw-bold border-bottom py-2 bg-light">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="d-grid" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
        {generateCalendarDays().map((date, index) => {
          const routesForDate = getRoutesForDate(date);
          const availableDrivers = getAvailableDriversForDate(date);
          const assignedRoutesForDate = routesForDate.filter((r) => r.status === "assigned");
          const unassignedRoutesForDate = routesForDate.filter((r) => r.status === "unassigned");

          return (
            <div
              key={index}
              className={`p-2 border small ${
                !isCurrentMonth(date)
                  ? "bg-light text-muted"
                  : isToday(date)
                  ? "bg-primary bg-opacity-10 border-primary"
                  : "bg-white"
              }`}
            >
              {/* Date Number */}
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className={`${isToday(date) ? "fw-bold text-primary" : ""}`}>
                  {date.getDate()}
                </span>
                {availableDrivers.length > 0 && (
                  <span className="badge bg-info text-dark">{availableDrivers.length}</span>
                )}
              </div>

              {/* Route Status */}
              <div>
                {assignedRoutesForDate.length > 0 && (
                  <div className="mb-1">
                    <span className="badge bg-success">
                      {assignedRoutesForDate.length} assigned
                    </span>
                  </div>
                )}
                {unassignedRoutesForDate.length > 0 && (
                  <div className="mb-1">
                    <span className="badge bg-danger">
                      {unassignedRoutesForDate.length} unassigned
                    </span>
                  </div>
                )}
              </div>

              {/* Routes */}
              {routesForDate.length > 0 && (
                <div>
                  {routesForDate.slice(0, 2).map((route) => (
                    <div key={route.id} className="border rounded px-1 py-1 mb-1 small text-truncate">
                      <div className="fw-bold small">{route.name}</div>
                      <div className="text-muted">{route.time}</div>
                    </div>
                  ))}
                  {routesForDate.length > 2 && (
                    <div className="text-center text-muted small">
                      +{routesForDate.length - 2} more
                    </div>
                  )}
                </div>
              )}

              {availableDrivers.length > 0 && routesForDate.length === 0 && (
                <div className="text-muted fst-italic small">{availableDrivers.length}Drivers available</div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Legend */}
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Legend</h5>
        <div className="row small">
          <div className="col d-flex align-items-center gap-2">
            <div className="rounded border border-primary bg-primary bg-opacity-10" style={{ width: "16px", height: "16px" }}></div>
            <span>Today</span>
          </div>
          <div className="col d-flex align-items-center gap-2">
            <span className="badge bg-success">Assigned</span>
            <span>Routes with drivers</span>
          </div>
          <div className="col d-flex align-items-center gap-2">
            <span className="badge bg-danger">Unassigned</span>
            <span>Routes needing drivers</span>
          </div>
          <div className="col d-flex align-items-center gap-2">
            <span className="badge bg-info text-dark">Available</span>
            <span>Drivers free to assign</span>
          </div>
        </div>
      </div>
    </div>

    {/* Quick Stats */}
    <div className="row mt-4 g-3">
      <div className="col-md-3 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="text-primary">{routes.length}</h3>
            <p className="text-muted small mb-0">Total Routes This Month</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="text-success">{assignedRoutes}</h3>
            <p className="text-muted small mb-0">Assigned Routes</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="text-danger">{unassignedRoutes}</h3>
            <p className="text-muted small mb-0">Unassigned Routes</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="text-info">{availableDrivers.length}</h3>
            <p className="text-muted small mb-0">Available Drivers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
