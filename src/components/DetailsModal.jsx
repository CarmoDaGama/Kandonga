import React, { useState } from 'react';

const renderDocumentMock = (docType) => {
  switch(docType) {
    case 'Alvará Comercial':
      return (
        <div style={{ padding: '40px', background: 'white', width: '100%', height: '100%', overflowY: 'auto', color: '#1f2937', boxSizing: 'border-box' }}>
          <div style={{ borderBottom: '2px solid #1f2937', paddingBottom: '20px', marginBottom: '30px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>República de Angola</h1>
            <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Ministério do Comércio</h2>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '20px' }}>ALVARÁ COMERCIAL</h3>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '16px', marginBottom: '30px', fontSize: '14px' }}>
            <strong style={{ textAlign: 'right' }}>Nº do Alvará:</strong> <span>123456/LUANDA/2023</span>
            <strong style={{ textAlign: 'right' }}>NIF:</strong> <span>5000123456</span>
            <strong style={{ textAlign: 'right' }}>Firma:</strong> <span>ANGOLA LOGISTICS S.A.</span>
            <strong style={{ textAlign: 'right' }}>Sede:</strong> <span>Luanda, Rua dos Mercadores, nº 45, Município de Luanda</span>
            <strong style={{ textAlign: 'right' }}>Capital Social:</strong> <span>Kz 10.000.000,00</span>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px', marginBottom: '16px' }}>Ramos de Actividade</h4>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              <li>Transporte rodoviário de mercadorias</li>
              <li>Logística e distribuição</li>
              <li>Armazenagem</li>
            </ul>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '60px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '12px', marginBottom: '40px' }}>O Director Provincial</p>
              <div style={{ borderTop: '1px solid #1f2937', width: '200px', paddingTop: '8px' }}>Assinatura Autorizada</div>
            </div>
            <div style={{ fontSize: '12px' }}>
              <p>Emitido em: <strong>Luanda, 15 de Março de 2023</strong></p>
              <p>Válido até: <strong>14 de Março de 2028</strong></p>
            </div>
          </div>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', fontSize: '120px', color: 'rgba(0,0,0,0.03)', pointerEvents: 'none', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            CÓPIA AUTENTICADA
          </div>
        </div>
      );
    case 'Extrato Bancário (6M)':
      return (
        <div style={{ padding: '40px', background: 'white', width: '100%', height: '100%', overflowY: 'auto', color: '#1f2937', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e5e7eb', paddingBottom: '20px', marginBottom: '30px' }}>
             <div>
               <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--brand-blue)' }}>BANCO DE INVESTIMENTO</h1>
               <p style={{ fontSize: '12px', color: '#6b7280' }}>Sua parceira financeira de confiança</p>
             </div>
             <div style={{ textAlign: 'right' }}>
               <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>EXTRATO DE CONTA</h2>
               <p style={{ fontSize: '14px' }}>Período: <strong>01/04/2023 a 30/09/2023</strong></p>
             </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Titular</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold' }}>ANGOLA LOGISTICS S.A.</p>
              <p style={{ fontSize: '14px' }}>NIF: 5000123456</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Conta Corrente (Kz)</p>
              <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Nº 0012.3456.7890.1</p>
              <p style={{ fontSize: '14px' }}>IBAN: AO06.0000.0000.1234.5678.9</p>
            </div>
          </div>

          <table style={{ width: '100%', fontSize: '12px', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f3f4f6', borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '12px', fontWeight: '600' }}>Data</th>
                <th style={{ padding: '12px', fontWeight: '600' }}>Descrição</th>
                <th style={{ padding: '12px', fontWeight: '600', textAlign: 'right' }}>Débito</th>
                <th style={{ padding: '12px', fontWeight: '600', textAlign: 'right' }}>Crédito</th>
                <th style={{ padding: '12px', fontWeight: '600', textAlign: 'right' }}>Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px' }}>01/09/2023</td>
                <td style={{ padding: '12px' }}>SALDO ANTERIOR</td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>15.420.000,00</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px' }}>05/09/2023</td>
                <td style={{ padding: '12px' }}>PAGAMENTO SERVIÇOS TRIBUTÁRIOS - AGT</td>
                <td style={{ padding: '12px', textAlign: 'right', color: '#dc2626' }}>-1.250.000,00</td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right' }}>14.170.000,00</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px' }}>12/09/2023</td>
                <td style={{ padding: '12px' }}>TRANSFERÊNCIA RECEBIDA - CLIENTE X</td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right', color: '#16a34a' }}>+5.800.000,00</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>19.970.000,00</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px' }}>25/09/2023</td>
                <td style={{ padding: '12px' }}>PROCESSAMENTO DE SALÁRIOS</td>
                <td style={{ padding: '12px', textAlign: 'right', color: '#dc2626' }}>-4.200.000,00</td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right' }}>15.770.000,00</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e5e7eb', background: '#f9fafb' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>30/09/2023</td>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>SALDO FINAL</td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right' }}></td>
                <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold' }}>15.770.000,00</td>
              </tr>
            </tbody>
          </table>
          
          <div style={{ marginTop: '40px', fontSize: '11px', color: '#9ca3af', textAlign: 'center' }}>
            <p>Este documento foi gerado eletronicamente e não requer assinatura.</p>
            <p>Página 6 de 6</p>
          </div>
        </div>
      );
    case 'Relatório Auditoria':
      return (
        <div style={{ padding: '40px', background: 'white', width: '100%', height: '100%', overflowY: 'auto', color: '#1f2937', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>KPMG</h1>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>Auditores Independentes</p>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', borderBottom: '2px solid #111827', paddingBottom: '10px', marginBottom: '20px' }}>RELATÓRIO DOS AUDITORES INDEPENDENTES SOBRE AS DEMONSTRAÇÕES FINANCEIRAS</h2>
            <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>Aos Accionistas da</p>
            <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>ANGOLA LOGISTICS S.A.</p>
          </div>

          <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#374151' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Opinião</h3>
            <p style={{ marginBottom: '20px' }}>
              Auditámos as demonstrações financeiras da Angola Logistics S.A. (a Empresa), que compreendem o balanço em 31 de Dezembro de 2022, a demonstração de resultados, a demonstração das alterações no capital próprio e a demonstração dos fluxos de caixa para o ano findo naquela data, bem como as notas às demonstrações financeiras, incluindo um resumo das políticas contabilísticas significativas.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Em nossa opinião, as demonstrações financeiras anexas apresentam de forma verdadeira e apropriada, em todos os aspectos materiais, a posição financeira da Empresa em 31 de Dezembro de 2022, e o seu desempenho financeiro e fluxos de caixa para o ano findo naquela data, de acordo com o Plano Geral de Contabilidade (PGC) de Angola.
            </p>

            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Bases para a Opinião</h3>
            <p style={{ marginBottom: '20px' }}>
              A nossa auditoria foi efectuada de acordo com as Normas Internacionais de Auditoria (ISA). As nossas responsabilidades nos termos dessas normas estão descritas na secção "Responsabilidades do Auditor pela Auditoria das Demonstrações Financeiras" do nosso relatório. Somos independentes da Empresa, em conformidade com o Código de Ética para Profissionais de Contabilidade (Código IESBA), e cumprimos as nossas outras responsabilidades éticas de acordo com esses requisitos. Acreditamos que a prova de auditoria que obtivemos é suficiente e apropriada para proporcionar uma base para a nossa opinião.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #e5e7eb' }}>
             <div>
               <p style={{ fontWeight: 'bold', marginBottom: '40px' }}>KPMG Angola - Auditores e Consultores, S.A.</p>
               <div style={{ borderTop: '1px solid #111827', width: '250px', paddingTop: '10px' }}>
                 <p style={{ fontSize: '14px', fontWeight: '600' }}>Sócio Responsável</p>
                 <p style={{ fontSize: '12px', color: '#6b7280' }}>Inscrição OCPCA nº 20180123</p>
               </div>
             </div>
             <div style={{ textAlign: 'right', fontSize: '14px' }}>
               <p>Luanda, 28 de Abril de 2023</p>
             </div>
          </div>
        </div>
      );
    case 'Certidão Fiscal':
      return (
        <div style={{ padding: '40px', background: 'white', width: '100%', height: '100%', overflowY: 'auto', color: '#1f2937', position: 'relative', boxSizing: 'border-box' }}>
           <div style={{ textAlign: 'center', marginBottom: '30px' }}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Emblem_of_Angola.svg/150px-Emblem_of_Angola.svg.png" alt="República de Angola" style={{ width: '80px', marginBottom: '15px', filter: 'grayscale(100%) opacity(0.8)' }} />
             <h1 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>República de Angola</h1>
             <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Ministério das Finanças</h2>
             <h3 style={{ fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: '#111827', background: '#f3f4f6', display: 'inline-block', padding: '8px 16px', borderRadius: '4px' }}>Administração Geral Tributária (AGT)</h3>
           </div>

           <div style={{ textAlign: 'center', margin: '40px 0' }}>
             <h2 style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'underline' }}>CERTIDÃO DE REGULARIDADE FISCAL</h2>
             <p style={{ marginTop: '10px', fontSize: '14px', color: '#dc2626', fontWeight: 'bold' }}>SITUAÇÃO IRREGULAR / PENDENTE</p>
           </div>

           <div style={{ fontSize: '14px', lineHeight: '1.8', textAlign: 'justify', marginBottom: '40px' }}>
             <p>
               O Chefe da Repartição Fiscal, nos termos da legislação tributária em vigor, CERTIFICA que, consultados os registos da Administração Geral Tributária (AGT), verificou-se a existência de <strong>PENDÊNCIAS</strong> em nome do contribuinte abaixo identificado:
             </p>
           </div>

           <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '20px', marginBottom: '40px' }}>
             <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', fontSize: '14px' }}>
               <strong style={{ color: '#991b1b' }}>NIF:</strong> <span>5000123456</span>
               <strong style={{ color: '#991b1b' }}>Contribuinte:</strong> <span>ANGOLA LOGISTICS S.A.</span>
               <strong style={{ color: '#991b1b' }}>Domicílio Fiscal:</strong> <span>Luanda, Rua dos Mercadores, nº 45, Município de Luanda</span>
             </div>
           </div>
           
           <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#991b1b', marginBottom: '10px' }}>Descrição das Pendências:</h4>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px', fontSize: '14px', color: '#dc2626' }}>
                <li>Falta de liquidação do Imposto Industrial - Exercício de 2022.</li>
                <li>Divergências na Declaração de IVA (Mês: Dezembro/2022).</li>
              </ul>
           </div>

           <div style={{ fontSize: '14px', lineHeight: '1.8', textAlign: 'justify', marginBottom: '60px' }}>
             <p>
               A presente certidão é emitida exclusivamente para efeitos informativos e não constitui quitação de quaisquer dívidas que venham a ser apuradas. O contribuinte deve regularizar a sua situação junto da Repartição Fiscal competente no prazo estipulado por lei.
             </p>
           </div>

           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
             <div style={{ fontSize: '12px' }}>
               <p>Documento processado por computador.</p>
               <p>Código de Validação: <strong>AGT-2023-PEND-88291</strong></p>
             </div>
             <div style={{ textAlign: 'center' }}>
               <div style={{ width: '100px', height: '100px', border: '3px solid #dc2626', borderRadius: '50%', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626', fontWeight: 'bold', transform: 'rotate(-15deg)', fontSize: '16px' }}>
                 INVÁLIDO
               </div>
               <div style={{ borderTop: '1px solid #1f2937', width: '250px', paddingTop: '8px' }}>O Chefe da Repartição Fiscal</div>
             </div>
           </div>
        </div>
      );
    default:
      return (
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          <svg viewBox="0 0 24 24" style={{ width: '64px', height: '64px', fill: 'currentColor', margin: '0 auto 16px auto', opacity: 0.5 }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <p style={{ fontSize: '14px', fontWeight: '500' }}>Documento não encontrado</p>
        </div>
      );
  }
};
function DetailsModal({ setView }) {
  const [status, setStatus] = useState('PENDING'); // PENDING, APPROVED, PAID, REFUSED
  const [showPayModal, setShowPayModal] = useState(false);
  const [viewingDoc, setViewingDoc] = useState(null);

  const handleApprove = () => setStatus('APPROVED');
  const handleRefuse = () => setStatus('REFUSED');
  const handlePay = () => {
    setShowPayModal(false);
    setStatus('PAID');
  };

  return (
    <div className="view-content fullscreen active" id="view-details">
      <header className="topbar" style={{ borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', background: 'var(--bg-body)', flexShrink: 0, height: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => setView('creditos')} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: '0.2s' }}>
            <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', fill: 'currentColor' }}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Pedido #KZ-88291</h2>
            {status === 'PAID' && <span className="badge" style={{ background: 'var(--brand-blue)', color: '#fff', fontSize: '10px' }}>PAGO</span>}
            {status === 'REFUSED' && <span className="badge" style={{ background: '#dc2626', color: '#fff', fontSize: '10px' }}>NEGADO</span>}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {status === 'PENDING' && (
            <>
              <button className="btn-secondary" onClick={handleRefuse} style={{ color: 'var(--text-secondary)' }}>Negar Pedido</button>
              <button className="btn-primary" onClick={handleApprove}>Admitir Pedido</button>
            </>
          )}
          {status === 'APPROVED' && (
            <>
              <button className="btn-secondary" onClick={handleRefuse} style={{ color: 'var(--text-secondary)' }}>Cancelar</button>
              <button className="btn-primary" onClick={() => setShowPayModal(true)}>Pagar Crédito - GPO</button>
            </>
          )}
          {status === 'PAID' && (
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              Crédito Liquidado
            </span>
          )}
          {status === 'REFUSED' && (
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              Pedido Recusado
            </span>
          )}
        </div>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 300px', gap: '24px', marginBottom: '24px' }}>
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Company Info */}
            <div className="panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ width: '64px', height: '64px', background: 'var(--bg-body)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', border: '1px solid var(--border)' }}>
                  <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px', fill: 'var(--brand-blue)' }}><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>Angola Logistics S.A.</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>Setor: Transporte & Logística</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '11px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Localização</span><span style={{ color: 'var(--text-primary)' }}>Luanda, AO</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Tempo de Mercado</span><span style={{ color: 'var(--text-primary)' }}>8 Anos</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600' }}>Funcionários</span><span style={{ color: 'var(--text-primary)' }}>124</span></div>
              </div>
            </div>

            {/* Financial Summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '10px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>Resumo Financeiro (Kz)</h4>
              <div className="panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '500' }}>Receita Anual</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>45.2M</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'var(--brand-blue)' }}><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
              </div>
              <div className="panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '500' }}>Despesa Operacional</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>12.8M</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: '#d67b7b' }}><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg>
              </div>
              <div className="panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(7, 212, 3, 0.2)', background: 'rgba(7, 212, 3, 0.05)' }}>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--brand-blue)', marginBottom: '4px', fontWeight: '600' }}>Lucro Líquido</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>32.4M</div>
                </div>
                <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'var(--brand-blue)' }}><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>PONTUAÇÃO</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>Análise multidimensional de risco de crédito</p>
              </div>
              <div style={{ background: 'var(--bg-body)', padding: '6px 12px', borderRadius: '4px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: '500' }}>Atualizado: Hoje, 10:45</div>
            </div>

            {/* Circular Gauge Mock */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <svg width="240" height="240" viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="90" fill="none" stroke="#1e2430" strokeWidth="14"></circle>
                <circle cx="120" cy="120" r="90" fill="none" stroke="#a3e635" strokeWidth="14" strokeDasharray="565.48" strokeDashoffset="89" strokeLinecap="round" transform="rotate(-90 120 120)"></circle>
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: '700', color: 'var(--text-primary)' }}>842</div>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#a3e635', letterSpacing: '1px' }}>EXCELENTE</div>
              </div>
            </div>
            
            {/* Linear Scale below gauge */}
            <div style={{ marginTop: '32px', marginBottom: '48px' }}>
              <div className="risk-bar" style={{ background: 'linear-gradient(90deg, #d67b7b 0%, #facc15 50%, #4ade80 100%)' }}>
                <div className="risk-marker" style={{ left: '84.2%' }}></div>
              </div>
              <div className="risk-labels" style={{ marginTop: '8px' }}>
                <span>0</span>
                <span></span>
                <span>700</span>
                <span>1000</span>
              </div>
            </div>

            {/* 4 smaller bars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Histórico de Crédito</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>92/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '92%', background: 'var(--brand-blue)' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Capacidade de Pagamento</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>88/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '88%', background: 'var(--brand-blue)' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estabilidade Operacional</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>75/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '75%', background: 'var(--brand-blue)' }}></div></div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Liquidez de Mercado</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>81/100</span>
                </div>
                <div className="score-bar-bg" style={{ height: '6px' }}><div className="score-fill" style={{ width: '81%', background: 'var(--brand-blue)' }}></div></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Documentação */}
            <div className="panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>Documentação</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div onClick={() => setViewingDoc('Alvará Comercial')} style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-body)'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    Alvará Comercial
                  </div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
                <div onClick={() => setViewingDoc('Extrato Bancário (6M)')} style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-body)'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6L12 1z"/></svg>
                    Extrato Bancário (6M)
                  </div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
                <div onClick={() => setViewingDoc('Certidão Fiscal')} style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-body)'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    Certidão Fiscal
                  </div>
                  <span className="badge" style={{ background: 'var(--brand-blue)', color: '#fff', fontSize: '9px', padding: '2px 6px' }}>PENDENTE</span>
                </div>
                <div onClick={() => setViewingDoc('Relatório Auditoria')} style={{ background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '6px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-body)'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                    Relatório Auditoria
                  </div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }}></div>
                </div>
              </div>
              <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Ver Todos Documentos</button>
            </div>

            {/* Log de Auditoria */}
            <div className="panel" style={{ padding: '24px', flex: 1 }}>
              <h3 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '24px' }}>Log de Auditoria</h3>
              <div style={{ position: 'relative', paddingLeft: '20px' }}>
                <div style={{ position: 'absolute', left: '4px', top: '8px', bottom: '8px', width: '2px', background: 'var(--bg-body)' }}></div>
                
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--bg-surface)', border: '2px solid var(--brand-blue)', boxShadow: '0 0 0 2px rgba(120,153,212,0.2)' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '4px' }}>Documentação Analisada</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Há 2 horas por KANDONGA</div>
                </div>
                
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--border)' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>Consulta de Bureau</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>Ontem, 14:20 via API</div>
                </div>
                
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-20px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--border)' }}></div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>Pedido Submetido</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>05 Out, 09:12</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transações Recentes */}
        <div className="panel" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>Transações Recentes</h3>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}><svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', fill: 'currentColor' }}><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg></button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Natureza</th>
                <th>Valor (Kz)</th>
                <th style={{ textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ pointerEvents: 'none' }}>
                <td style={{ color: 'var(--text-secondary)' }}>12/10/2023</td>
                <td style={{ color: 'var(--text-secondary)' }}>Pagamento Fornecedor</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>1,240,000</td>
                <td style={{ textAlign: 'right' }}><span className="badge" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.2)' }}>Concluído</span></td>
              </tr>
              <tr style={{ pointerEvents: 'none' }}>
                <td style={{ color: 'var(--text-secondary)' }}>11/10/2023</td>
                <td style={{ color: 'var(--text-secondary)' }}>Serviços Mensais</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>85,400</td>
                <td style={{ textAlign: 'right' }}><span className="badge" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.2)' }}>Concluído</span></td>
              </tr>
              <tr style={{ pointerEvents: 'none' }}>
                <td style={{ color: 'var(--text-secondary)' }}>09/10/2023</td>
                <td style={{ color: 'var(--text-secondary)' }}>Renda Escritório</td>
                <td style={{ color: 'var(--text-primary)', fontWeight: '500' }}>450,000</td>
                <td style={{ textAlign: 'right' }}><span className="badge" style={{ background: 'rgba(250, 204, 21, 0.1)', color: '#facc15', borderColor: 'rgba(250, 204, 21, 0.2)' }}>Processando</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Payment Confirmation Modal */}
      {showPayModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="panel" style={{ width: '400px', padding: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '16px' }}>Confirmar Pagamento</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.5' }}>
              Você está prestes a liquidar o crédito no valor de <strong>45.2M Kz</strong> para <strong>Angola Logistics S.A.</strong> através do Angolan. Esta ação é irreversível.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button className="btn-secondary" onClick={() => setShowPayModal(false)}>Cancelar</button>
              <button className="btn-primary" onClick={handlePay}>Confirmar Pagamento</button>
            </div>
          </div>
        </div>
      )}

      {/* Document Viewer Modal */}
      {viewingDoc && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', zIndex: 1100, padding: '40px' }} onClick={() => setViewingDoc(null)}>
          <div style={{ background: 'var(--bg-surface)', width: '100%', maxWidth: '800px', height: '100%', maxHeight: '90vh', borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.2)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--border)', background: 'var(--bg-body)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Visualização: {viewingDoc}</h3>
              <button onClick={() => setViewingDoc(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
                <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: 'currentColor' }}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e5e7eb', position: 'relative' }}>
              {renderDocumentMock(viewingDoc)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsModal;
