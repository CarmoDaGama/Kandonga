import React from 'react';

function LandingPage({ onNavigate }) {
  // Common SVG components to keep JSX clean
  const IconPerson = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
  const IconChartDown = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></svg>;
  const IconGlobe = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>;
  const IconBarChart = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/></svg>;
  const IconLock = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>;
  const IconRocket = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>;
  const IconInbox = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h4v2h-2v4zm3-8H9V2h6v2z"/></svg>;
  const IconReceipt = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>;
  const IconCard = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>;
  const IconBrain = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M12 15.39l-3.76 2.27 1-4.28-3.32-2.88 4.38-.37L12 6.1l1.71 4.04 4.38.37-3.32 2.88 1 4.28z"/></svg>;
  const IconBank = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>;
  const IconCheck = () => <svg viewBox="0 0 24 24" style={{ width: '1.2em', height: '1.2em', fill: 'currentColor' }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>;
  const IconPointer = () => <svg viewBox="0 0 24 24" style={{ width: '1em', height: '1em', fill: 'currentColor' }}><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>;

  return (
    <div style={{ flex: 1, width: '100%', height: '100vh', overflowY: 'auto', backgroundColor: '#fff', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 
        ========================================
        HERO SECTION
        ======================================== 
      */}
      <section style={{ backgroundColor: 'var(--brand-blue)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* Header */}
        <header style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg viewBox="0 0 220 40" style={{ height: '32px', fill: '#fff' }}>
              <rect x="5" y="20" width="8" height="15" />
              <rect x="17" y="12" width="8" height="23" />
              <rect x="29" y="4" width="8" height="31" />
              <rect x="0" y="35" width="42" height="5" />
              <text x="48" y="32" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="26" letterSpacing="1px">KANDONGA</text>
            </svg>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button onClick={() => onNavigate('login')} style={{ backgroundColor: '#fff', color: 'var(--brand-blue)', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              Aceder Conta
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 5% 100px 5%', maxWidth: '1400px', margin: '0 auto', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1 1 400px', maxWidth: '600px', zIndex: 10 }}>
            <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-1px' }}>
              Milhares de negócios em Angola existem… <br/> mas ninguém os vê.
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px', lineHeight: '1.5' }}>
              Funcionam todos os dias, geram rendimento e movem a economia — mas continuam invisíveis para o sistema financeiro.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button onClick={() => onNavigate('login')} style={{ backgroundColor: '#fff', color: 'var(--brand-blue)', border: 'none', padding: '18px 36px', borderRadius: '12px', fontWeight: '800', fontSize: '18px', cursor: 'pointer', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconPointer /> Criar conta gratuitamente
              </button>
              <span style={{ fontSize: '14px', opacity: 0.8, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <IconPointer /> Sem custos. Sem complicações.
              </span>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img src="/hero-final.png" alt="Profissional a trabalhar" style={{ width: '100%', maxWidth: '900px', borderRadius: '24px', boxShadow: '0 24px 48px rgba(0,0,0,0.2)', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SECÇÃO PROBLEMA
        ======================================== 
      */}
      <section style={{ padding: '100px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '24px', letterSpacing: '-0.5px' }}>
            O problema não é falta de trabalho. É falta de reconhecimento.
          </h2>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px auto', lineHeight: '1.6' }}>
            Em Angola, milhares de microempreendedores trabalham diariamente na informalidade. Vendendo, produzindo, criando valor — mas sem registo, sem histórico, sem prova.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', textAlign: 'left' }}>
            <div className="panel" style={{ padding: '40px', border: '1px solid var(--border)', borderRadius: '24px', background: 'var(--bg-body)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--brand-blue)' }}><IconPerson /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Quem sofre</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Microempreendedores e pequenos negócios informais.</p>
            </div>
            <div className="panel" style={{ padding: '40px', border: '1px solid var(--border)', borderRadius: '24px', background: 'var(--bg-body)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--brand-blue)' }}><IconChartDown /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Consequência</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Não conseguem acesso ao crédito nem crescer o seu negócio.</p>
            </div>
            <div className="panel" style={{ padding: '40px', border: '1px solid var(--border)', borderRadius: '24px', background: 'var(--bg-body)' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--brand-blue)' }}><IconGlobe /></div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>Impacto no país</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Uma economia com alto potencial… mas travada pela invisibilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SECÇÃO INSIGHT
        ======================================== 
      */}
      <section style={{ padding: '100px 5%', backgroundColor: 'var(--bg-body)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '32px', lineHeight: '1.2' }}>
            E se o problema não fosse o negócio… mas a falta de dados?
          </h2>
          <p style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: '1.5', fontWeight: '500' }}>
            O sistema financeiro não vê esforço.<br/>
            Não vê dedicação.<br/>
            Só vê dados.
          </p>
          <div style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 12px 24px rgba(0,0,0,0.05)', border: '1px solid var(--brand-blue)' }}>
            <p style={{ fontSize: '26px', fontWeight: '800', color: 'var(--brand-blue)', margin: 0, lineHeight: '1.4' }}>
              "Sem dados, não há confiança.<br/> Sem confiança, não há crescimento."
            </p>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SECÇÃO SOLUÇÃO
        ======================================== 
      */}
      <section style={{ padding: '100px 5%', backgroundColor: 'var(--brand-blue)', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>
            Uma solução simples. Mas transformadora.
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '60px', opacity: 0.9, lineHeight: '1.6' }}>
            Transformamos atividades informais em dados financeiros reais — criando visibilidade, confiança e acesso ao sistema financeiro.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '32px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}><IconBarChart /></div>
              <h4 style={{ fontSize: '18px', fontWeight: '700' }}>Dados financeiros automáticos</h4>
            </div>
            <div style={{ flex: '1 1 250px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '32px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}><IconLock /></div>
              <h4 style={{ fontSize: '18px', fontWeight: '700' }}>Mais confiança no sistema</h4>
            </div>
            <div style={{ flex: '1 1 250px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '32px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}><IconRocket /></div>
              <h4 style={{ fontSize: '18px', fontWeight: '700' }}>Acesso a novas oportunidades</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SECÇÃO PRODUTO
        ======================================== 
      */}
      <section style={{ padding: '120px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '60px' }}>
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <img src="/E5.jpeg" alt="App Mobile Kandonga" style={{ width: '100%', maxWidth: '350px', borderRadius: '32px', boxShadow: '0 32px 64px rgba(0,0,0,0.15)' }} />
          </div>
          <div style={{ flex: '1 1 400px', maxWidth: '550px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: '1.1' }}>
              Tudo o que precisas, no teu telemóvel
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.6' }}>
              Uma aplicação móvel gratuita de gestão financeira desenhada para microempreendedores:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '600' }}>
                <span style={{ fontSize: '24px', color: 'var(--brand-blue)', display: 'flex' }}><IconInbox /></span> Registo de entradas e saídas
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '600' }}>
                <span style={{ fontSize: '24px', color: 'var(--brand-blue)', display: 'flex' }}><IconReceipt /></span> PoS com emissão de faturas
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '600' }}>
                <span style={{ fontSize: '24px', color: 'var(--brand-blue)', display: 'flex' }}><IconCard /></span> Pagamentos via referência
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '600' }}>
                <span style={{ fontSize: '24px', color: 'var(--brand-blue)', display: 'flex' }}><IconBarChart /></span> Relatórios e histórico financeiro
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: 'var(--text-primary)', fontWeight: '600' }}>
                <span style={{ fontSize: '24px', color: 'var(--brand-blue)', display: 'flex' }}><IconBrain /></span> Score de crédito alternativo
              </li>
            </ul>
            <div style={{ padding: '24px', backgroundColor: 'var(--bg-body)', borderRadius: '12px', borderLeft: '4px solid var(--brand-blue)' }}>
              <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconPointer style={{ color: 'var(--brand-blue)' }} /> Simples de usar. Feita para o dia a dia.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        COMO FUNCIONA
        ======================================== 
      */}
      <section style={{ padding: '100px 5%', backgroundColor: 'var(--bg-body)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '60px' }}>
            Começar é simples
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '60px' }}>
            <div className="panel" style={{ flex: '1 1 250px', padding: '40px 24px', borderRadius: '24px', backgroundColor: '#fff', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 24px auto' }}>1</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><IconPointer style={{ color: 'var(--brand-blue)' }}/> Cria a tua conta</h3>
            </div>
            <div className="panel" style={{ flex: '1 1 250px', padding: '40px 24px', borderRadius: '24px', backgroundColor: '#fff', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 24px auto' }}>2</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><IconPointer style={{ color: 'var(--brand-blue)' }}/> Regista vendas e despesas</h3>
            </div>
            <div className="panel" style={{ flex: '1 1 250px', padding: '40px 24px', borderRadius: '24px', backgroundColor: '#fff', border: '1px solid var(--border)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 24px auto' }}>3</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', textAlign: 'left' }}><IconPointer style={{ color: 'var(--brand-blue)' }}/> Gera o teu histórico</h3>
            </div>
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--brand-blue)' }}>
            O teu negócio torna-se visível, confiável e preparado para crescer.
          </h3>
        </div>
      </section>

      {/* 
        ========================================
        IMPACTO
        ======================================== 
      */}
      <section style={{ padding: '100px 5%', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '60px', textAlign: 'center' }}>
            Impacto real, para pessoas reais
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ background: 'var(--bg-body)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/E2.jpeg" alt="Para Ti" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--brand-blue)' }}><IconPerson /></span> Para ti
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Criação de histórico financeiro
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Separação entre finanças pessoais e negócio
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{ background: 'var(--bg-body)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/E3.jpeg" alt="Para o Sistema" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--brand-blue)' }}><IconBank /></span> Para o sistema
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Avaliação de risco com dados reais
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Mais confiança e transparência
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ background: 'var(--bg-body)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/E4.jpeg" alt="Para Angola" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--brand-blue)' }}><IconGlobe /></span> Para Angola
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Inclusão financeira
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Crescimento económico sustentável
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        VISÃO
        ======================================== 
      */}
      <section style={{ padding: '120px 5%', backgroundColor: '#052e16', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '32px', lineHeight: '1.2' }}>
            Estamos a construir o futuro da inclusão financeira em Angola
          </h2>
          <p style={{ fontSize: '22px', marginBottom: '48px', opacity: 0.9, lineHeight: '1.6' }}>
            Ligamos o informal ao formal.<br/>
            Transformamos esforço em dados.<br/>
            E dados em oportunidades.
          </p>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(22, 163, 74, 0.2)', padding: '16px 32px', borderRadius: '100px', border: '1px solid var(--brand-blue)' }}>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#4ade80' }}>Onde hoje há invisibilidade, amanhã haverá crescimento.</span>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        CTA FINAL
        ======================================== 
      */}
      <section style={{ padding: '120px 5%', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px', backgroundColor: 'var(--bg-body)', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: '0 24px 48px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-1px' }}>
            O teu negócio merece ser visto.
          </h2>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Começa hoje, gratuitamente, e dá o próximo passo.
          </p>
          <button onClick={() => onNavigate('login')} style={{ backgroundColor: 'var(--brand-blue)', color: '#fff', border: 'none', padding: '20px 48px', borderRadius: '16px', fontWeight: '800', fontSize: '20px', cursor: 'pointer', boxShadow: '0 12px 24px rgba(22, 163, 74, 0.3)', marginBottom: '32px', transition: 'transform 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => e.target.style.transform='scale(1.05)'} onMouseLeave={(e) => e.target.style.transform='scale(1)'}>
            <IconPointer /> Criar conta agora
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Sem custos</span>
            <span style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Fácil de usar</span>
            <span style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ color: 'var(--brand-blue)' }}><IconCheck /></span> Sem burocracia</span>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        FOOTER
        ======================================== 
      */}
      <footer style={{ backgroundColor: '#ffffff', paddingTop: '40px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg viewBox="0 0 220 40" style={{ height: '24px', fill: 'var(--brand-blue)' }}>
              <rect x="5" y="20" width="8" height="15" />
              <rect x="17" y="12" width="8" height="23" />
              <rect x="29" y="4" width="8" height="31" />
              <rect x="0" y="35" width="42" height="5" />
              <text x="48" y="32" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="26" letterSpacing="1px">KANDONGA</text>
            </svg>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>&copy; 2026 Kandonga Analytics. Todos os direitos reservados. Feito com foco no mercado Angolano.</span>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;
