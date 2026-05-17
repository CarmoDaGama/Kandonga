import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Creditos from './components/Creditos';
import DetailsModal from './components/DetailsModal';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

// Admin Components
import AdminSidebar from './components/AdminSidebar';
import AdminDashboard from './components/AdminDashboard';

import ApproveUsers from './components/ApproveUsers';
import ManageUsers from './components/ManageUsers';
import ActivityLog from './components/ActivityLog';
import AdminTransactions from './components/AdminTransactions';

function App() {
  const [appRoute, setAppRoute] = useState('landing'); // 'landing', 'login', 'app'
  const [currentView, setView] = useState('dashboard');
  const [userRole, setUserRole] = useState(null); // 'ADMIN' or 'ANALYST'

  const handleLogin = (role) => {
    setUserRole(role);
    setAppRoute('app');
    if (role === 'ADMIN') {
      setView('admin-dashboard');
    } else {
      setView('dashboard');
    }
  };

  const handleLogout = () => {
    setAppRoute('landing');
    setUserRole(null);
  };

  if (appRoute === 'landing') {
    return <LandingPage onNavigate={setAppRoute} />;
  }

  if (appRoute === 'login') {
    return <Login onLogin={handleLogin} onBack={() => setAppRoute('landing')} />;
  }

  return (
    <>
      {userRole === 'ADMIN' ? (
        <AdminSidebar currentView={currentView} setView={setView} onLogout={handleLogout} />
      ) : (
        <Sidebar currentView={currentView} setView={setView} onLogout={handleLogout} />
      )}
      
      <main className="main-wrapper">
        {/* Hide Topbar when viewing details to match the HTML behavior */}
        {currentView !== 'details' && <Topbar />}
        
        {/* Analyst Views */}
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'creditos' && <Creditos setView={setView} />}
        {currentView === 'details' && <DetailsModal setView={setView} />}

        {/* Admin Views */}
        {currentView === 'admin-dashboard' && <AdminDashboard />}

        {currentView === 'approve-users' && <ApproveUsers />}
        {currentView === 'manage-users' && <ManageUsers />}
        {currentView === 'activity-log' && <ActivityLog />}
        {currentView === 'admin-transactions' && <AdminTransactions />}
      </main>
    </>
  );
}

export default App;
