import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateChart(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="view-content active" style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>Balanço da Plataforma</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Visão geral financeira de todas as entidades registadas.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: '500' }}>Receita Total (Kz)</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(74, 222, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: '#4ade80' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-3.57-1.62-3.57-3.03 0-1.53 1.13-2.65 2.5-3V4h2.67v1.85c1.47.3 2.76 1.25 2.96 2.9h-1.95c-.17-.9-.87-1.55-2.35-1.55-1.47 0-2.22.82-2.22 1.48 0 .8.54 1.41 2.82 1.94 2.68.64 3.42 1.77 3.42 3.2 0 1.54-1.12 2.64-2.67 2.9z"/></svg>
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-primary)' }}>1,452.8M</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', fontWeight: '600' }}><svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M7 14l5-5 5 5z"/></svg> 12.5%</span>
            <span style={{ color: 'var(--text-tertiary)' }}>vs mês anterior</span>
          </div>
        </div>

        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: '500' }}>Volume de Transacções</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(120, 153, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'var(--brand-blue)' }}><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-primary)' }}>12,482</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', fontWeight: '600' }}><svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M7 14l5-5 5 5z"/></svg> 8.2%</span>
            <span style={{ color: 'var(--text-tertiary)' }}>vs mês anterior</span>
          </div>
        </div>

        <div className="panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: '500' }}>Entidades Activas</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(250, 204, 21, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: '#facc15' }}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-primary)' }}>145</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', fontWeight: '600' }}><svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M7 14l5-5 5 5z"/></svg> +12</span>
            <span style={{ color: 'var(--text-tertiary)' }}>neste mês</span>
          </div>
        </div>
      </div>

      <div className="panel" style={{ flex: 1, padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '24px' }}>Evolução do Volume Financeiro</h3>
        <div style={{ width: '100%', height: '300px', display: 'flex', alignItems: 'flex-end', gap: '16px', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
          {[
            { month: 'Jan', value: 300, label: '300M Kz' },
            { month: 'Fev', value: 450, label: '450M Kz' },
            { month: 'Mar', value: 350, label: '350M Kz' },
            { month: 'Abr', value: 600, label: '600M Kz' },
            { month: 'Mai', value: 500, label: '500M Kz' },
            { month: 'Jun', value: 800, label: '800M Kz' },
            { month: 'Jul', value: 750, label: '750M Kz' },
            { month: 'Ago', value: 900, label: '900M Kz' },
            { month: 'Set', value: 850, label: '850M Kz' },
            { month: 'Out', value: 1000, label: '1.0B Kz' },
            { month: 'Nov', value: 950, label: '950M Kz' },
            { month: 'Dez', value: 1100, label: '1.1B Kz' },
          ].map((data, i) => {
            const heightPercentage = animateChart ? (data.value / 1100) * 100 : 0;
            const targetHeight = (data.value / 1100) * 100;
            return (
              <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', position: 'relative' }} className="chart-bar-container">
                <div 
                  style={{ width: '100%', background: 'var(--brand-blue)', borderRadius: '4px 4px 0 0', height: `calc(${heightPercentage}% - 24px)`, transition: 'height 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease', opacity: 0.8, cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.target.style.opacity = '1'; if(e.target.nextSibling) { e.target.nextSibling.style.opacity = '1'; e.target.nextSibling.style.transform = 'translateY(0)'; } }}
                  onMouseLeave={(e) => { e.target.style.opacity = '0.8'; if(e.target.nextSibling) { e.target.nextSibling.style.opacity = '0'; e.target.nextSibling.style.transform = 'translateY(10px)'; } }}
                ></div>
                <div style={{ position: 'absolute', bottom: `calc(${targetHeight}% + 4px)`, background: 'var(--bg-surface)', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', color: 'var(--text-primary)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', opacity: 0, transform: 'translateY(10px)', transition: 'all 0.2s', pointerEvents: 'none', border: '1px solid var(--border)', whiteSpace: 'nowrap', zIndex: 10 }}>
                  {data.label}
                </div>
                <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', height: '16px', lineHeight: '16px' }}>{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
