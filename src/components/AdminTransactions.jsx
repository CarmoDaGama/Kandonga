import React from 'react';

function AdminTransactions() {
  const transactions = [
    { id: 'TRX-9982', date: 'Hoje, 10:45', entity: 'Angola Logistics S.A.', type: 'Crédito Liquidado', amount: '45,200,000', status: 'COMPLETED' },
    { id: 'TRX-9981', date: 'Hoje, 09:12', entity: 'Comércio Global Lda', type: 'Taxa de Plataforma', amount: '125,000', status: 'COMPLETED' },
    { id: 'TRX-9980', date: 'Ontem, 16:30', entity: 'Tech Solutions AO', type: 'Levantamento', amount: '2,500,000', status: 'PENDING' },
    { id: 'TRX-9979', date: 'Ontem, 11:20', entity: 'Banco Nacional', type: 'Depósito (GPO)', amount: '150,000,000', status: 'COMPLETED' },
    { id: 'TRX-9978', date: '15 Mai 2026', entity: 'Angola Logistics S.A.', type: 'Pagamento de Juros', amount: '840,000', status: 'FAILED' },
  ];

  return (
    <div className="view-content active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>Transacções Globais</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Monitorize todas as transacções financeiras na plataforma em tempo real.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg>
            Filtrar
          </button>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="panel" style={{ padding: '0', overflow: 'hidden' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID Transacção</th>
              <th>Data/Hora</th>
              <th>Entidade</th>
              <th>Natureza</th>
              <th>Valor (Kz)</th>
              <th style={{ textAlign: 'right' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx.id}>
                <td style={{ color: 'var(--brand-blue)', fontWeight: '600', fontSize: '13px' }}>{trx.id}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{trx.date}</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{trx.entity}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{trx.type}</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{trx.amount}</td>
                <td style={{ textAlign: 'right' }}>
                  {trx.status === 'COMPLETED' && <span className="badge" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.2)' }}>Concluído</span>}
                  {trx.status === 'PENDING' && <span className="badge" style={{ background: 'rgba(250, 204, 21, 0.1)', color: '#facc15', borderColor: 'rgba(250, 204, 21, 0.2)' }}>Pendente</span>}
                  {trx.status === 'FAILED' && <span className="badge" style={{ background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', borderColor: 'rgba(220, 38, 38, 0.2)' }}>Falhou</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTransactions;
