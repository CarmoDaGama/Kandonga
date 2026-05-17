import React from 'react';

function ActivityLog() {
  const logs = [
    { id: 1, user: 'Admin User', action: 'Login', details: 'Acesso ao sistema via IP 192.168.1.1', time: 'Há 5 minutos', icon: 'M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' },
    { id: 2, user: 'Kandonga Analista', action: 'Crédito Aprovado', details: 'Pedido #KZ-88291 admitido para Angola Logistics', time: 'Há 2 horas', icon: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', color: '#4ade80' },
    { id: 3, user: 'Carlos Miguel', action: 'Documento Anexado', details: 'Certidão Fiscal atualizada (Banco Nacional)', time: 'Há 4 horas', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z', color: 'var(--brand-blue)' },
    { id: 4, user: 'Sistema', action: 'Sincronização AGT', details: 'Sincronização automática concluída (50 novas entradas)', time: 'Há 6 horas', icon: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z', color: '#facc15' },
    { id: 5, user: 'Admin User', action: 'Utilizador Removido', details: 'Rui Costa removido da plataforma', time: 'Ontem, 16:45', icon: 'M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z', color: '#dc2626' },
  ];

  return (
    <div className="view-content active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>Registo de Actividades</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Acompanhe todas as ações realizadas na plataforma para fins de auditoria.</p>
      </div>

      <div className="panel" style={{ padding: '0', overflowY: 'auto', flex: 1, maxHeight: 'calc(100vh - 220px)' }}>
        {logs.map((log, index) => (
          <div key={log.id} style={{ display: 'flex', gap: '20px', padding: '24px', borderBottom: index !== logs.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${log.color || 'var(--border)'}` }}>
              <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: log.color || 'var(--text-secondary)' }}><path d={log.icon}/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '14px' }}>{log.action}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{log.time}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{log.details}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-tertiary)' }}>
                <svg viewBox="0 0 24 24" style={{ width: '12px', height: '12px', fill: 'currentColor' }}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                {log.user}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
        <button className="btn-secondary">Carregar Mais Actividades</button>
      </div>
    </div>
  );
}

export default ActivityLog;
