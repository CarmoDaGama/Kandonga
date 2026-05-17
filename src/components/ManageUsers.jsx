import React, { useState } from 'react';
import RegisterEntity from './RegisterEntity';

function ManageUsers() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [users, setUsers] = useState([
    { id: 101, name: 'Carlos Miguel', email: 'carlos@banco.ao', role: 'Gestor', entity: 'Banco Nacional', status: 'ACTIVE', lastLogin: 'Hoje, 08:30' },
    { id: 102, name: 'Ana Beatriz', email: 'ana@logistics.ao', role: 'Financeiro', entity: 'Angola Logistics S.A.', status: 'ACTIVE', lastLogin: 'Ontem, 14:15' },
    { id: 103, name: 'Rui Costa', email: 'rui@tech.ao', role: 'Admin Local', entity: 'Tech Solutions AO', status: 'INACTIVE', lastLogin: '01 Mai 2026' },
    { id: 104, name: 'Kandonga Analista', email: 'analista@kandonga.com', role: 'Analista', entity: 'Kandonga Interno', status: 'ACTIVE', lastLogin: 'Hoje, 09:00' }
  ]);

  const handleRemove = (id) => {
    if (window.confirm('Tem certeza que deseja remover este utilizador da plataforma?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="view-content active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>Gerir Utilizadores</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Visualize e gira todos os utilizadores ativos na plataforma.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input type="text" placeholder="Pesquisar..." style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-body)', color: 'var(--text-primary)', fontSize: '13px', outline: 'none' }} />
          <button className="btn-primary" onClick={() => setShowRegisterModal(true)}>Registar Entidade</button>
        </div>
      </div>

      <div className="panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Entidade</th>
              <th>Função</th>
              <th>Último Login</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: user.status === 'ACTIVE' ? '#4ade80' : 'var(--text-tertiary)' }}></div>
                  {user.name}
                </td>
                <td style={{ color: 'var(--text-secondary)' }}>{user.email}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{user.entity}</td>
                <td><span className="badge" style={{ background: 'var(--bg-body)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{user.role}</span></td>
                <td style={{ color: 'var(--text-secondary)' }}>{user.lastLogin}</td>
                <td style={{ textAlign: 'right' }}>
                  <button onClick={() => handleRemove(user.id)} style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', padding: '6px', opacity: 0.8 }} title="Remover Utilizador" onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.8}>
                    <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor', pointerEvents: 'none' }}><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showRegisterModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '40px' }} onClick={() => setShowRegisterModal(false)}>
           <div onClick={e => e.stopPropagation()} style={{ background: 'var(--bg-surface)', borderRadius: '12px', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
             <RegisterEntity onClose={() => setShowRegisterModal(false)} />
           </div>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
