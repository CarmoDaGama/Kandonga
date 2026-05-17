import React from 'react';

function AdminSidebar({ currentView, setView, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>PAINEL ADMIN</h2>
        <span>KANDONGA</span>
      </div>
      <nav className="sidebar-nav">
        <a 
          className={currentView === 'admin-dashboard' ? 'active' : ''} 
          onClick={() => setView('admin-dashboard')}
        >
          <svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
          Dashboard (Balanço)
        </a>

        <a 
          className={currentView === 'approve-users' ? 'active' : ''} 
          onClick={() => setView('approve-users')}
        >
          <svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
          Aprovar Utilizadores
        </a>
        <a 
          className={currentView === 'manage-users' ? 'active' : ''} 
          onClick={() => setView('manage-users')}
        >
          <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          Gerir Utilizadores
        </a>
        <a 
          className={currentView === 'activity-log' ? 'active' : ''} 
          onClick={() => setView('activity-log')}
        >
          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          Registo de Actividades
        </a>
        <a 
          className={currentView === 'admin-transactions' ? 'active' : ''} 
          onClick={() => setView('admin-transactions')}
        >
          <svg viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
          Transacções Globais
        </a>
      </nav>
      <div className="sidebar-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="user-profile">
          <div className="user-avatar" style={{ borderRadius: '6px' }}>
            <img src="https://ui-avatars.com/api/?name=Admin&background=4ade80&color=111827" alt="Avatar" />
          </div>
          <div className="user-info">
            <span className="name">Administrador</span>
            <span className="role">Plataforma Kandonga</span>
          </div>
        </div>
        <button onClick={onLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: '8px' }} title="Terminar Sessão">
          <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
