import React, { useState } from 'react';

function ApproveUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: 'João Silva', email: 'joao.silva@empresa.ao', role: 'Gestor Financeiro', entity: 'Angola Logistics S.A.', date: '16 Mai 2026', status: 'PENDING' },
    { id: 2, name: 'Maria Fernandes', email: 'maria.f@comercio.ao', role: 'Administrador', entity: 'Comércio Global Lda', date: '15 Mai 2026', status: 'PENDING' },
    { id: 3, name: 'Pedro Santos', email: 'pedro@tech.ao', role: 'Analista', entity: 'Tech Solutions AO', date: '14 Mai 2026', status: 'PENDING' },
  ]);

  const handleAction = (id, action) => {
    setUsers(users.filter(user => user.id !== id));
    alert(`Utilizador ${action === 'approve' ? 'Aprovado' : 'Rejeitado'} (Simulação)`);
  };

  return (
    <div className="view-content active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>Aprovar Utilizadores</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Reveja e aprove novos utilizadores que solicitaram acesso à plataforma.</p>
      </div>

      <div className="panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Entidade</th>
              <th>Função Solicitada</th>
              <th>Data</th>
              <th style={{ textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((user) => (
              <tr key={user.id}>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{user.name}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{user.email}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{user.entity}</td>
                <td><span className="badge" style={{ background: 'var(--bg-body)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>{user.role}</span></td>
                <td style={{ color: 'var(--text-secondary)' }}>{user.date}</td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button onClick={() => handleAction(user.id, 'reject')} style={{ background: 'none', border: '1px solid #dc2626', color: '#dc2626', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer', fontWeight: '600' }}>
                      Rejeitar
                    </button>
                    <button onClick={() => handleAction(user.id, 'approve')} style={{ background: '#4ade80', border: 'none', color: '#111827', borderRadius: '6px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer', fontWeight: '600' }}>
                      Aprovar
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>Nenhum utilizador pendente de aprovação.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ApproveUsers;
