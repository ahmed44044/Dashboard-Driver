# 🚐 Driver Scheduling Dashboard

A comprehensive frontend React application for managing driver schedules, route assignments, and transportation logistics. Built with React and designed for deployment on Vercel.

Live: https://dashboard-driver-a5pp3rh41-ahmed44044s-projects.vercel.app/


## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Data Storage](#data-storage)
- [Assumptions](#assumptions)
- [Future Enhancements](#future-enhancements)
- [Deployment](#deployment)


## ✨ Features

### Core Functionality
- **👤 Driver Management**: Add, view, and manage driver information (name, email, phone)
- **🗺️ Route Management**: Create and manage routes with origin, destination, date, and time
- **🔄 Assignment System**: Assign and unassign drivers to routes with real-time status updates
- **📊 Dashboard**: Comprehensive overview with statistics and assignment tracking

### Advanced Features
- **📅 Calendar View**: Monthly calendar displaying driver availability and route assignments
- **📈 Real-time Statistics**: Track assignment rates, available drivers, and route status
- **🎨 Responsive Design**: Clean, professional interface with inline CSS styling and Bootstrap
- **🔍 Visual Indicators**: Color-coded status badges for easy identification
- **📱 Mobile Friendly**: Responsive grid layouts that work on all devices

### Dashboard Features
- Total routes, assigned/unassigned counts
- Available driver tracking
- Assignment rate calculation
- Route and driver management interfaces

### Calendar Features
- Monthly navigation (previous/next month)
- Visual route assignment status per day
- Available driver count per day
- Route details with time and location
- Today highlighting
- Legend for easy understanding

## 🛠️ Tech Stack

- **Frontend**: React 18+ with Hooks
- **Styling**: Inline CSS with modern design patterns and Bootstrap
- **State Management**: React useState for local state
- **Data Storage**:  JSON data (in-memory)
- **Icons**: Emoji-based iconography
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmed44044/Dashbord-Driver.git
   cd driver
   ```

2. **Install dependencies**
   ```bash
   npm install
  
   ```

3. **Start the development server**
   ```bash
   npm run dev
 
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

   ## 📖 Usage

### Adding Drivers
1. Navigate to the "Add Driver" tab
2. Fill in the required information:
   - Full name
   - Email address
   - Phone number
3. Click "Add Driver" to save

### Creating Routes
1. Go to the "Add Route" tab
2. Enter route details:
   - Route name
   - Origin location
   - Destination location
   - Date and time
3. Submit to create an unassigned route

### Managing Assignments
1. **Assign Driver**: From the Dashboard, select an available driver from the dropdown for any unassigned route
2. **Unassign Driver**: Click the "Unassign" button on any assigned route
3. **View Status**: Check the color-coded badges (green = assigned, red = unassigned)

### Using the Calendar
1. Navigate to the "Calendar" tab
2. Use Previous/Next buttons to navigate months
3. View daily information:
   - Routes scheduled for each day
   - Available driver count
   - Assignment status with color coding
4. Hover over route cards for full details

## 📁 Project Structure

```
├── App.jsx                             # Main application component
├── components/            
│   ├── AddDriver/AddDriver.jsx         #AddDriver Component To Add New Driver
│   ├── AddRouter/AddRoute.jsx          #AddRoute Component To Add New Route
│   ├── CalendarView/CalendarView.jsx   # Calendar component 
│   ├── Dashboard/Dashboard.jsx         # Dashboard component
│   ├── Layout/Layout.jsx               # Layout component 
│   ├── DriversList/DriversList.jsx     # DriversList component
│   ├── RouterssList/RoutesList.jsx     # RoutesList component
│   ├── Navbar/Navbar.jsx               # Navbar component
│   ├── Footer/Footer.jsx               # Footer component
│   └── ...               # Other component files
├── styles/
│   └── globals.css       # Global styles an

└── README.md             # This file
```
### Current Implementation
The application is currently implemented as a single-file React component (`App.tsx`) using:
- Inline CSS styling for complete control
- React Hooks for state management
- Tabbed navigation system
- Responsive grid layouts

## 💾 Data Storage

### Current Implementation
- **Type**: In-memory mock data
- **Persistence**: Session-based (resets on page refresh)
- **Initial Data**: Pre-populated with sample drivers and routes

### Data Structure

**Driver Object**:
```javascript
{
  id: number,
  name: string,
  email: string,
  phone: string,
  status: 'available' | 'assigned'
}
```

**Route Object**:
```javascript
{
  id: number,
  name: string,
  origin: string,
  destination: string,
  date: string,        // YYYY-MM-DD format
  time: string,        // HH:MM format
  driverId: number | null,
  status: 'assigned' | 'unassigned'
}
```

## 🔧 Assumptions

### Technical Assumptions
- **Browser Support**: Modern browsers with ES6+ support
- **Screen Sizes**: Responsive design optimized for 320px-1920px width
- **Data Persistence**: No backend required; suitable for demonstration purposes
- **User Authentication**: No authentication system implemented
- **Time Zones**: All times assumed to be in local timezone

### Business Logic Assumptions
- **Driver Assignment**: One driver per route, one route per driver per time slot
- **Route Conflicts**: No validation for driver time conflicts
- **Status Management**: Driver status automatically updates based on assignments
- **Date Format**: Standard YYYY-MM-DD format for consistency
- **Availability Logic**: Drivers are available if not assigned to routes on specific dates

### UI/UX Assumptions
- **Navigation**: Tab-based navigation is sufficient for user workflow
- **Data Entry**: Form validation for required fields only
- **Mobile Experience**: Touch-friendly interface with responsive design

## 🔮 Future Enhancements

### Planned Features
- [ ] **Backend Integration**: Connect to REST API or GraphQL endpoint
- [ ] **Data Persistence**: Database storage with PostgreSQL/MongoDB
- [ ] **Authentication**: User login and role-based access control
- [ ] **Advanced Calendar**: Drag-and-drop assignment functionality
- [ ] **Search & Filter**: Advanced filtering for routes and drivers
- [ ] **Notifications**: Email/SMS notifications for assignments
- [ ] **Reporting**: Generate PDF reports and analytics
- [ ] **Real-time Updates**: WebSocket integration for live updates

### Technical Improvements
- [ ] **TypeScript Migration**: Full TypeScript implementation
- [ ] **Testing Suite**: Unit and integration tests
- [ ] **Performance Optimization**: Code splitting and lazy loading
- [ ] **PWA Features**: Offline functionality and push notifications
- [ ] **Accessibility**: WCAG 2.1 compliance improvements

### Business Features
- [ ] **Route Optimization**: Calculate optimal routes and schedules
- [ ] **Driver Profiles**: Detailed driver information and history
- [ ] **Vehicle Management**: Track vehicles and maintenance
- [ ] **Time Tracking**: Clock in/out functionality for drivers
- [ ] **Cost Calculation**: Route costing and billing features

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings (auto-detected for React)
   - Deploy

3. **Environment Configuration**
   ```bash
   # https://dashboard-driver-a5pp3rh41-ahmed44044s-projects.vercel.app
   ```

**GitHub Pages**:
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```
