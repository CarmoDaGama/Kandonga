import React from 'react';

function Dashboard() {
  return (
    <div className="view-content active" id="view-dashboard">
      <div className="page-header">
        <div>
          <h1>Visão Geral de Crédito</h1>
          <p>Monitorização em tempo real da carteira de crédito e submissões.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>
            <span className="stat-trend positive" style={{ color: 'var(--text-primary)' }}>+2.4% vs mês ant.</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">TOTAL DISPONIBILIZADO</span>
            <div className="stat-value">12.500.000 <span>Kz</span></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <span className="stat-trend">45 Contratos</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">CRÉDITOS ADMITIDOS</span>
            <div className="stat-value">8.200.000 <span>Kz</span></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            </div>
            <span className="stat-trend">12 Pendentes</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">EM ANÁLISE</span>
            <div className="stat-value">2.100.000 <span>Kz</span></div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon red">
              <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </div>
            <span className="stat-trend" style={{ color: '#d67b7b' }}>8 Recusados</span>
          </div>
          <div className="stat-body">
            <span className="stat-label">CRÉDITOS NEGADOS</span>
            <div className="stat-value danger">2.200.000 <span>Kz</span></div>
          </div>
        </div>
      </div>

      <div className="middle-grid">
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <h3>Evolução Mensal</h3>
              <p>Estados de submissão nos últimos 6 meses</p>
            </div>
            <div className="legend">
              <div className="legend-item"><div className="legend-dot blue"></div> Admitidos</div>
              <div className="legend-item"><div className="legend-dot red"></div> Negados</div>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-lines">
              <div className="chart-line-h"></div>
              <div className="chart-line-h"></div>
              <div className="chart-line-h"></div>
              <div className="chart-line-h"></div>
            </div>

            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="chart-svg-anim">
              {/* Admitidos Line */}
              <path 
                d="M 10 120 Q 50 100 90 110 T 170 60 T 250 80 T 330 40 T 410 50 T 490 20" 
                fill="none" 
                stroke="var(--brand-blue)" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
              <path 
                d="M 10 120 Q 50 100 90 110 T 170 60 T 250 80 T 330 40 T 410 50 T 490 20" 
                fill="none" 
                stroke="var(--brand-blue)" 
                strokeWidth="12" 
                strokeOpacity="0.1"
                strokeLinecap="round"
              />
              {/* Negados Line */}
              <path 
                d="M 10 130 Q 50 120 90 130 T 170 100 T 250 110 T 330 80 T 410 90 T 490 60" 
                fill="none" 
                stroke="#dc2626" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>

            <div className="chart-labels">
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <h3>Últimas Submissões</h3>
              <p>Atividade recente de novos contratos</p>
            </div>
          </div>

          <div className="submissions-list">
            <div className="sub-header">
              <span>Empresa</span>
              <span>Score</span>
              <span>Estado</span>
              <span></span>
            </div>

            <div id="loanListContainer">
              <div className="sub-item">
                <div className="sub-info">
                  <span className="sub-name">AngoBuild Lda</span>
                  <span className="sub-date">12 Jan, 2024</span>
                </div>
                <span className="sub-score">845</span>
                <span className="sub-status Admitido">Admitido</span>
                <button className="sub-action">
                  <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </button>
              </div>
              <div className="sub-item">
                <div className="sub-info">
                  <span className="sub-name">Kero Market</span>
                  <span className="sub-date">11 Jan, 2024</span>
                </div>
                <span className="sub-score">512</span>
                <span className="sub-status Pendente">Pendente</span>
                <button className="sub-action">
                  <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </button>
              </div>
              <div className="sub-item">
                <div className="sub-info">
                  <span className="sub-name">TotalEnergies AO</span>
                  <span className="sub-date">10 Jan, 2024</span>
                </div>
                <span className="sub-score">920</span>
                <span className="sub-status Admitido">Admitido</span>
                <button className="sub-action">
                  <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </button>
              </div>
              <div className="sub-item">
                <div className="sub-info">
                  <span className="sub-name">Unitel S.A.</span>
                  <span className="sub-date">09 Jan, 2024</span>
                </div>
                <span className="sub-score">215</span>
                <span className="sub-status Negado">Negado</span>
                <button className="sub-action">
                  <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </button>
              </div>
            </div>

            <button className="view-all">Ver Todas as Submissões</button>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="risk-info">
          <div className="risk-text">
            <h3>Análise de Risco Agregada</h3>
            <p>A carteira atual mantém um score médio de 745 pontos, indicando um perfil de baixo risco para o período operacional atual.</p>
          </div>
        </div>
        <div className="risk-bar-container">
          <div className="risk-bar">
            <div className="risk-marker"></div>
          </div>
          <div className="risk-labels">
            <span>0</span>
            <span>745 (Média)</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
