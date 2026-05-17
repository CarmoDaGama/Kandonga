import React from 'react';

function Creditos({ setView }) {
  return (
    <div className="view-content active" id="view-creditos">
      <div className="page-header">
        <div>
          <h1>Carteira de Créditos</h1>
          <p>Gestão e monitorização de solicitações de crédito empresarial.</p>
        </div>
        <button className="btn-primary">
          <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          Nova Solicitação
        </button>
      </div>

      <div className="controls-bar">
        <div className="tabs">
          <button className="tab-item active">Todos</button>
          <button className="tab-item">Submetidos</button>
          <button className="tab-item">Em Revisão</button>
          <button className="tab-item">Admitidos</button>
          <button className="tab-item">Negados</button>
        </div>
        <div className="actions-group">
          <button className="btn-secondary">
            <svg viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
            Filtros Avançados
          </button>
          <button className="btn-secondary">
            <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>ID</th>
              <th>Setor</th>
              <th>Data</th>
              <th>Valor (Kz)</th>
              <th>Score</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => setView('details')}>
              <td>
                <div className="cell-empresa">
                  <div className="cell-empresa-icon">
                    <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                  </div>
                  <span className="cell-empresa-name">AngoForte Logística</span>
                </div>
              </td>
              <td className="cell-id">#CR-2024-001</td>
              <td className="cell-setor">Transporte</td>
              <td className="cell-data">12 Mai 2024</td>
              <td className="cell-valor">12.500.000,00</td>
              <td>
                <div className="score-container">
                  <span className="score-text">845/1000</span>
                  <div className="score-bar-bg">
                    <div className="score-fill green" style={{ width: '84.5%' }}></div>
                  </div>
                </div>
              </td>
              <td><span className="badge admitidos">Admitidos</span></td>
            </tr>
            <tr onClick={() => setView('details')}>
              <td>
                <div className="cell-empresa">
                  <div className="cell-empresa-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                  </div>
                  <span className="cell-empresa-name">Indústria Sul S.A.</span>
                </div>
              </td>
              <td className="cell-id">#CR-2024-002</td>
              <td className="cell-setor">Manufatura</td>
              <td className="cell-data">11 Mai 2024</td>
              <td className="cell-valor">45.000.000,00</td>
              <td>
                <div className="score-container">
                  <span className="score-text">610/1000</span>
                  <div className="score-bar-bg">
                    <div className="score-fill yellow" style={{ width: '61%' }}></div>
                  </div>
                </div>
              </td>
              <td><span className="badge em-revisao">Em Revisão</span></td>
            </tr>
            <tr onClick={() => setView('details')}>
              <td>
                <div className="cell-empresa">
                  <div className="cell-empresa-icon">
                    <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  </div>
                  <span className="cell-empresa-name">Varejo Luanda</span>
                </div>
              </td>
              <td className="cell-id">#CR-2024-003</td>
              <td className="cell-setor">Comércio</td>
              <td className="cell-data">10 Mai 2024</td>
              <td className="cell-valor">8.200.000,00</td>
              <td>
                <div className="score-container">
                  <span className="score-text">320/1000</span>
                  <div className="score-bar-bg">
                    <div className="score-fill red" style={{ width: '32%' }}></div>
                  </div>
                </div>
              </td>
              <td><span className="badge negados">Negados</span></td>
            </tr>
            <tr onClick={() => setView('details')}>
              <td>
                <div className="cell-empresa">
                  <div className="cell-empresa-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
                  </div>
                  <span className="cell-empresa-name">AgroHuíla Lda</span>
                </div>
              </td>
              <td className="cell-id">#CR-2024-004</td>
              <td className="cell-setor">Agricultura</td>
              <td className="cell-data">09 Mai 2024</td>
              <td className="cell-valor">72.000.000,00</td>
              <td>
                <div className="score-container">
                  <span className="score-text">716/1000</span>
                  <div className="score-bar-bg">
                    <div className="score-fill green" style={{ width: '71.6%' }}></div>
                  </div>
                </div>
              </td>
              <td><span className="badge submetidos">Submetidos</span></td>
            </tr>
            <tr onClick={() => setView('details')}>
              <td>
                <div className="cell-empresa">
                  <div className="cell-empresa-icon">
                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
                  </div>
                  <span className="cell-empresa-name">BioLab Angola</span>
                </div>
              </td>
              <td className="cell-id">#CR-2024-005</td>
              <td className="cell-setor">Saúde</td>
              <td className="cell-data">08 Mai 2024</td>
              <td className="cell-valor">18.750.000,00</td>
              <td>
                <div className="score-container">
                  <span className="score-text">950/1000</span>
                  <div className="score-bar-bg">
                    <div className="score-fill green" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </td>
              <td><span className="badge admitidos">Admitidos</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <span className="pagination-info">A mostrar 1-5 de 248 resultados</span>
        <div className="pagination-controls">
          <button className="page-btn"><svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg></button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn ellipsis">...</button>
          <button className="page-btn">50</button>
          <button className="page-btn"><svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg></button>
        </div>
      </div>
      
      <button className="fab">
        <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </button>
    </div>
  );
}

export default Creditos;
