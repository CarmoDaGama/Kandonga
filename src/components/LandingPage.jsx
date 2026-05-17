import React, { useState, useEffect } from 'react';
import './LandingPage.css';

// --- Ícones Inline em SVG de Altíssima Resolução e Performance ---
const SvgCheck = ({ width = 16, height = 16, strokeWidth = 3 }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SvgChevronDown = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SvgDownload = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const SvgArrowRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SvgPartnership = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SvgGov = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <line x1="12" y1="10" x2="12" y2="21" />
    <line x1="8" y1="10" x2="8" y2="21" />
    <line x1="16" y1="10" x2="16" y2="21" />
    <path d="M2 10L12 2l10 8" />
  </svg>
);

const SvgCard = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const SvgNewspaper = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M16 8h2" />
    <path d="M16 12h2" />
    <path d="M16 16h2" />
    <path d="M6 8h6v8H6z" />
  </svg>
);

const SvgTv = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="2" y="7" width="20" height="13" rx="2" />
    <path d="M17 2l-5 5-5-5" />
  </svg>
);

const SvgRocket = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    <line x1="22" y1="2" x2="11" y2="13" />
  </svg>
);

const SvgGlobe = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SvgCross = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--kangonga-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '24px', flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const SvgFree = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 8h10" />
    <path d="M7 12h10" />
    <path d="M7 16h6" />
  </svg>
);

const SvgOffline = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <path d="M17 6H7" />
  </svg>
);

const SvgLock = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const SvgBank = ({ width = 28, height = 28 }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="18" height="11" rx="2" />
    <line x1="3" y1="6" x2="21" y2="6" strokeWidth="3" />
    <path d="M12 2L2 6l10 4 10-4-10-4z" />
  </svg>
);

const SvgChart = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" strokeWidth="3" />
    <line x1="12" y1="20" x2="12" y2="4" strokeWidth="3" />
    <line x1="6" y1="20" x2="6" y2="14" strokeWidth="3" />
  </svg>
);

const SvgChartUp = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--kangonga-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const SvgBox = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--kangonga-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const SvgDoc = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--kangonga-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const SvgPeople = () => (
  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="var(--kangonga-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SvgPlay = ({ width = 24, height = 24 }) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const SvgPause = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const SvgVolumeHigh = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const SvgVolumeMute = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const SvgAndroid = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M17.523 15.3414c-.551 0-1.002-.451-1.002-1.002s.451-1.002 1.002-1.002c.551 0 1.002.451 1.002 1.002s-.451 1.002-1.002 1.002m-7.046 0c-.551 0-1.002-.451-1.002-1.002s.451-1.002 1.002-1.002c.551 0 1.002.451 1.002 1.002s-.451 1.002-1.002 1.002m7.23-6.0911l1.623-2.812c.07-.12.03-.28-.09-.35-.12-.07-.28-.03-.35.09l-1.664 2.883C15.011 8.4526 13.568 8.0118 12 8.0118s-3.011.4408-4.276 1.0504L6.06 6.1793c-.07-.12-.23-.16-.35-.09-.12.07-.16.23-.09.35l1.623 2.812C4.168 11.086 2.052 13.9113 2.002 17.2285h19.996c-.05-3.3172-2.166-6.1425-5.228-7.9782"/>
  </svg>
);

const SvgApple = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.19.67-2.91 1.49-.61.7-1.15 1.84-1.01 2.96 1.12.09 2.27-.58 2.93-1.39z"/>
  </svg>
);

const SvgMail = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lp-footer-contact-icon">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SvgPhone = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lp-footer-contact-icon">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SvgMapPin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lp-footer-contact-icon">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SvgHeart = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--kangonga-accent)" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 4px' }}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

function LandingPage({ onNavigate }) {
  // --- Estados do Header ---
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Estados de Pricing (Planos) ---
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' ou 'yearly'

  // --- Estados da Calculadora À La Carte ---
  const [selectedServices, setSelectedServices] = useState([]);

  // --- Estados de FAQ Accordion ---
  const [activeFaq, setActiveFaq] = useState(null);

  // --- Estados dos Modais ---
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false);

  // --- Estados do Simulado do Player de Vídeo ---
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(30); // 30% concluído
  const [videoTime, setVideoTime] = useState('0:18');
  const [isMuted, setIsMuted] = useState(false);

  // --- Efeito de Scroll no Header ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Função para toggle de seleção na calculadora à la carte ---
  const toggleService = (serviceId, price) => {
    if (selectedServices.some(s => s.id === serviceId)) {
      setSelectedServices(selectedServices.filter(s => s.id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, { id: serviceId, price }]);
    }
  };

  // --- Serviços à la carte disponíveis ---
  const alaCarteServices = [
    { id: 'formalizacao', name: 'Formalização do Negócio', price: 10000, desc: 'Processo legal completo em parceria com o INAPEM.' },
    { id: 'consultoria', name: 'Consultoria Financeira', price: 25000, desc: 'Sessão individual de 1 hora para otimização de fluxo de caixa.' },
    { id: 'treinamento', name: 'Treinamento de Equipa', price: 50000, desc: 'Capacitação completa de 1 dia para uso do app e boas práticas de POS.' },
    { id: 'contabilidade', name: 'Integração de Contabilidade', price: 30000, desc: 'Ligação automática mensal com o sistema do seu contabilista local.' }
  ];

  // --- Calcular total de serviços extras ---
  const totalExtraServices = selectedServices.reduce((sum, item) => sum + item.price, 0);

  // --- FAQs cadastrados ---
  const faqItems = [
    {
      q: 'O app é realmente gratuito?',
      a: 'Sim! O app POS completo, incluindo o registo de entradas/saídas e o histórico básico de vendas é 100% gratuito e livre de taxas ocultas. Os serviços avançados de planos e soluções à la carte são totalmente opcionais.'
    },
    {
      q: 'Preciso de internet para usar a aplicação no telemóvel?',
      a: 'Não! O app Kangonga foi desenhado especificamente com modo offline nativo. Registará todas as suas vendas e transações em qualquer lugar de Angola, e os dados serão sincronizados de forma segura assim que apanhar ligação à internet.'
    },
    {
      q: 'Como o histórico financeiro me ajuda a conseguir crédito?',
      a: 'Os bancos tradicionais e fintechs rejeitam microempreendedores porque não conseguem auditar o risco do negócio informal. Com o histórico financeiro automatizado e o Score Financeiro gerado pela Kangonga, você tem um documento robusto que serve de garantia de receita.'
    },
    {
      q: 'Quanto tempo leva o processo de formalização do negócio?',
      a: 'Com o nosso suporte completo e em parceria com o INAPEM, reunimos toda a documentação necessária e o processo completo costuma demorar entre 30 a 60 dias úteis.'
    },
    {
      q: 'Que dados vocês recolhem? São seguros?',
      a: 'Recolhemos apenas os registos financeiros declarados voluntariamente no app para a construção do seu histórico. Todos os seus dados são guardados de forma altamente criptografada e em total conformidade com a legislação angolana de proteção de dados.'
    },
    {
      q: 'Posso exportar dados para o meu contabilista?',
      a: 'Sim! No plano Pro ou Premium, pode exportar com apenas um clique os seus relatórios e balancetes detalhados em formatos Excel ou PDF organizados, prontos para enviar para contabilidade.'
    }
  ];

  return (
    <div className="lp-wrapper">
      
      {/* 
        ========================================
        1. HEADER / NAVBAR (Topo Fixo)
        ======================================== 
      */}
      <header className={`lp-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="lp-header-container">
          <a href="#" className="lp-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            {/* Logo Estilizado */}
            <svg viewBox="0 0 42 42" width="34" height="34" style={{ fill: 'var(--kangonga-primary)' }}>
              <rect x="5" y="20" width="8" height="17" rx="2" />
              <rect x="17" y="12" width="8" height="25" rx="2" />
              <rect x="29" y="4" width="8" height="33" rx="2" />
              <rect x="0" y="38" width="42" height="4" rx="1" />
            </svg>
            <span className="lp-logo-text">KANGONGA</span>
          </a>

          <nav className="lp-nav">
            <a href="#apps" className="lp-nav-link">Apps</a>
            <a href="#servicos" className="lp-nav-link">Serviços</a>
            <a href="#sobre" className="lp-nav-link">Sobre</a>
            <a href="#faq" className="lp-nav-link">FAQ</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => onNavigate('login')} className="lp-btn lp-btn-secondary" style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '0.85rem' }}>
              Aceder Conta
            </button>
            <a href="#baixar" className="lp-btn lp-btn-primary" style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '0.85rem' }}>
              Baixar App Grátis
            </a>
          </div>
        </div>
      </header>

      {/* 
        ========================================
        2. HERO SECTION (Dobra Principal)
        ======================================== 
      */}
      <section className="lp-hero">
        <div className="lp-hero-container">
          <div className="lp-hero-content">
            <h1 className="lp-hero-headline">
              Transforme o seu negócio informal em formal em minutos
            </h1>
            <p className="lp-hero-subheadline">
              Registe as suas vendas, gere histórico financeiro e aceda a crédito — tudo num app gratuito, robusto, prático, online ou offline.
            </p>
            <div className="lp-hero-actions">
              <a href="#baixar" className="lp-btn lp-btn-primary">
                <SvgDownload /> Baixar App Grátis
              </a>
              <a href="#como-funciona" className="lp-btn lp-btn-secondary">
                Ver como funciona
              </a>
            </div>

            <div className="lp-hero-proof">
              <div className="lp-hero-stars">
                <div className="lp-stars-container">★★★★★</div>
                <div className="lp-stars-label">4.8/5 na Google Play</div>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--kangonga-border)' }}></div>
              <div className="lp-hero-proof-text">
                Mais de <strong>5.000</strong> empreendedores angolanos já usam e expandem o seu negócio com a Kangonga.
              </div>
            </div>
          </div>

          <div className="lp-hero-shot">
            {/* Imagem Principal */}
            <img src="/hero-final.png" alt="Empreendedora angolana usando o app Kangonga POS no smartphone" />
            
            {/* Badges Flutuantes de Alta Conversão */}
            <div className="lp-floating-badge lp-floating-badge-1">
              <div className="lp-floating-badge-icon" style={{ backgroundColor: '#22c55e', width: '32px', height: '32px', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvgCheck width={14} height={14} strokeWidth={4} />
              </div>
              <div className="lp-badge-text">
                <h5>Venda Offline</h5>
                <p>100% Sincronizado</p>
              </div>
            </div>
            
            <div className="lp-floating-badge lp-floating-badge-2">
              <div className="lp-floating-badge-icon" style={{ backgroundColor: 'var(--kangonga-secondary)', width: '32px', height: '32px', borderRadius: '50%', color: 'var(--kangonga-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvgBank width={16} height={16} />
              </div>
              <div className="lp-badge-text">
                <h5>Crédito Aprovado</h5>
                <p>Microcréditos Locais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        3. LOGO WALL / PARTNERS (Parcerias)
        ======================================== 
      */}
      <section className="lp-logo-wall">
        <h4 className="lp-logo-wall-title">Confiado por parceiros de excelência e órgãos de mídia</h4>
        <div className="lp-logo-track-container">
          <div className="lp-logo-track">
            {/* Marquee Duplicado para Scroll Perfeito */}
            <span className="lp-partner-logo"><SvgPartnership /> INAPEM Angola</span>
            <span className="lp-partner-logo"><SvgGov /> Ministério das Finanças</span>
            <span className="lp-partner-logo"><SvgCard /> Banco Krad</span>
            <span className="lp-partner-logo"><SvgNewspaper /> Jornal de Angola</span>
            <span className="lp-partner-logo"><SvgTv /> TPA Angola</span>
            <span className="lp-partner-logo"><SvgRocket /> Kwata Startups</span>
            <span className="lp-partner-logo"><SvgGlobe /> Timbuktoo</span>
            
            {/* Repetido */}
            <span className="lp-partner-logo"><SvgPartnership /> INAPEM Angola</span>
            <span className="lp-partner-logo"><SvgGov /> Ministério das Finanças</span>
            <span className="lp-partner-logo"><SvgCard /> Banco Krad</span>
            <span className="lp-partner-logo"><SvgNewspaper /> Jornal de Angola</span>
            <span className="lp-partner-logo"><SvgTv /> TPA Angola</span>
            <span className="lp-partner-logo"><SvgRocket /> Kwata Startups</span>
            <span className="lp-partner-logo"><SvgGlobe /> Timbuktoo</span>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        4. PROBLEM / PAIN POINTS SECTION
        ======================================== 
      */}
      <section className="lp-problem" id="sobre">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">O seu negócio informal enfrenta estes desafios?</h2>
          <p className="lp-section-subtitle">
            Sabemos que gerir um negócio informal em Angola não é fácil. Sem estrutura, o seu esforço diário acaba por não ser reconhecido.
          </p>
        </div>

        <div className="lp-problem-grid">
          <div className="lp-problem-card">
            <SvgCross />
            <h4>Sem Histórico Financeiro</h4>
            <p>Os bancos exigem extratos e registos formais que o seu telemóvel atual não cria de forma automática. O seu esforço fica invisível para o sistema.</p>
          </div>
          <div className="lp-problem-card">
            <SvgCross />
            <h4>Sem Garantias Bancárias</h4>
            <p>Por não ter documentos oficiais organizados em dia, o seu negócio não consegue obter as aprovações necessárias e fica bloqueado no crescimento.</p>
          </div>
          <div className="lp-problem-card">
            <SvgCross />
            <h4>Sem Acesso a Crédito</h4>
            <p>Precisa de capital para comprar mais stock ou expandir a sua loja, mas os canais tradicionais cobram taxas abusivas e exigem papeladas infinitas.</p>
          </div>
        </div>

        <div className="lp-problem-outro">
          <p>Você não está sozinho — milhares de PMEs angolanas enfrentam exatamente o mesmo problema no dia a dia.</p>
          <a href="#como-funciona" className="lp-problem-link">
            Descubra como a Kangonga ajuda a resolver <SvgArrowRight />
          </a>
        </div>
      </section>

      {/* 
        ========================================
        5. SOLUTION / FEATURES SECTION (Zig-Zag)
        ======================================== 
      */}
      <section className="lp-features" id="apps">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">Tudo o que precisas, no teu telemóvel</h2>
          <p className="lp-section-subtitle">
            Uma solução integrada e simples que transforma as atividades do dia a dia do seu negócio em vantagens reais.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="lp-feature-item">
          <div className="lp-feature-image-container">
            <img src="/E5.jpeg" alt="Registo de vendas na aplicação POS da Kangonga" />
          </div>
          <div className="lp-feature-info">
            <span className="lp-feature-tag">Módulo POS</span>
            <h3>POS simplificado: Registe vendas mesmo sem internet</h3>
            <p>
              Venda e lance entradas e saídas de caixa em segundos. Sem configurações pesadas ou processos lentos.
            </p>
            <ul className="lp-feature-bullets">
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Interface super simples desenhada para qualquer smartphone.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Modo offline inteligente que guarda tudo e sincroniza depois.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Catálogo de produtos personalizado com preços rápidos e fotos.
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="lp-feature-item reverse">
          <div className="lp-feature-image-container">
            <img src="/E1.jpeg" alt="Gráficos financeiros automáticos gerados pela plataforma" />
          </div>
          <div className="lp-feature-info">
            <span className="lp-feature-tag">Relatórios</span>
            <h3>Histórico financeiro profissional de forma automática</h3>
            <p>
              Esqueça os cadernos perdidos ou erros nas contas de cabeça. A plataforma organiza a sua contabilidade automaticamente.
            </p>
            <ul className="lp-feature-bullets">
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Acompanhamento em tempo real de vendas diárias, semanais e mensais.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Visão clara de lucros reais deduzidos dos custos operacionais.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Exportação de relatórios profissionais para formatos PDF e Excel em um clique.
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="lp-feature-item">
          <div className="lp-feature-image-container">
            <img src="/E2.jpeg" alt="Análise de score financeiro e compatibilidade de crédito" />
          </div>
          <div className="lp-feature-info">
            <span className="lp-feature-tag">Score Financeiro</span>
            <h3>Descubra e prepare o seu negócio para aceder a crédito</h3>
            <p>
              Criamos uma ponte tecnológica entre a sua loja e o ecossistema bancário angolano através de análises de score exclusivas.
            </p>
            <ul className="lp-feature-bullets">
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Score financeiro gerado com base no seu histórico real de POS.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Sugestão inteligente de produtos financeiros adequados à sua dimensão.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Envio direto de propostas para bancos e instituições de microcrédito.
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="lp-feature-item reverse">
          <div className="lp-feature-image-container">
            <img src="/E3.jpeg" alt="Processo de formalização simplificado na plataforma" />
          </div>
          <div className="lp-feature-info">
            <span className="lp-feature-tag">Legalização</span>
            <h3>Cresça legalmente: Do informal ao formal sem dores de cabeça</h3>
            <p>
              Tornar o seu negócio oficial abre portas comerciais incríveis em Angola. Nós ajudamos a fazer isso passo a passo.
            </p>
            <ul className="lp-feature-bullets">
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Guias interativos passo a passo simplificados e sem jargões jurídicos.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Lista clara e templates para a recolha de documentos exigidos pelo governo.
              </li>
              <li>
                <div className="lp-feature-bullet-icon"><SvgCheck /></div>
                Parcerias oficiais integradas com o INAPEM para maior rapidez processual.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        6. HOW IT WORKS (Como Funciona em 4 Passos)
        ======================================== 
      */}
      <section className="lp-how" id="como-funciona">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">Como funciona em 4 passos simples</h2>
          <p className="lp-section-subtitle">
            Criámos um caminho prático para que comece a construir a reputação financeira do seu negócio em minutos.
          </p>
        </div>

        <div className="lp-how-grid">
          <div className="lp-how-step">
            <div className="lp-how-number">1</div>
            <h4>Download do App</h4>
            <p>Instale a aplicação móvel grátis no seu telemóvel Android ou iOS em apenas 2 minutos.</p>
          </div>
          <div className="lp-how-step">
            <div className="lp-how-number">2</div>
            <h4>Registe Vendas</h4>
            <p>Insira cada transação diária na loja em modo online ou totalmente offline com total simplicidade.</p>
          </div>
          <div className="lp-how-step">
            <div className="lp-how-number">3</div>
            <h4>Gere Relatórios</h4>
            <p>O sistema gera balanços financeiros automáticos e o seu score de crédito é atualizado mensalmente.</p>
          </div>
          <div className="lp-how-step">
            <div className="lp-how-number">4</div>
            <h4>Aceda a Crédito</h4>
            <p>Receba ofertas reais de microcréditos perfeitamente alinhados ao perfil do seu negócio.</p>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        7. BENEFITS SUMMARY SECTION
        ======================================== 
      */}
      <section className="lp-benefits">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">Porquê escolher a Kangonga?</h2>
          <p className="lp-section-subtitle">
            Combinamos conveniência tecnológica, segurança jurídica e foco na inclusão económica real de Angola.
          </p>
        </div>

        <div className="lp-benefits-grid">
          <div className="lp-benefit-card">
            <div className="lp-benefit-icon-box"><SvgFree /></div>
            <h4>100% Gratuito</h4>
            <p>Descarregue o app completo sem mensalidades escondidas, taxas de transação surpresa ou contratos fidelizados.</p>
          </div>
          <div className="lp-benefit-card">
            <div className="lp-benefit-icon-box"><SvgOffline /></div>
            <h4>Suporte Offline</h4>
            <p>Não gasta o seu saldo de dados na rua. Funciona perfeitamente sem internet e sincroniza quando estiver conectado.</p>
          </div>
          <div className="lp-benefit-card">
            <div className="lp-benefit-icon-box"><SvgLock /></div>
            <h4>Dados Seguros</h4>
            <p>Criptografia forte de ponta a ponta que protege as informações financeiras de fraudes, com total conformidade jurídica.</p>
          </div>
          <div className="lp-benefit-card">
            <div className="lp-benefit-icon-box"><SvgBank /></div>
            <h4>Ligação a Bancos</h4>
            <p>Ponte automatizada e ágil que envia dados a instituições financeiras parceiras credenciadas, encurtando prazos.</p>
          </div>
          <div className="lp-benefit-card">
            <div className="lp-benefit-icon-box"><SvgChart /></div>
            <h4>Decisões Inteligentes</h4>
            <p>Gráficos e fluxogramas práticos que mostram onde está a perder dinheiro e como aumentar a margem do negócio.</p>
          </div>
          <div className="lp-benefit-card">
            <div className="lp-benefit-icon-box"><SvgRocket /></div>
            <h4>Aceleração Formal</h4>
            <p>Ajuda direta na obtenção do Certificado de Microempresa e suporte jurídico para formalização rápida e segura.</p>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        8. SERVICES / PRICING & ESTIMATOR (Serviços & Preços)
        ======================================== 
      */}
      <section className="lp-pricing" id="servicos">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">Planos flexíveis para qualquer escala</h2>
          <p className="lp-section-subtitle">
            Comece de forma gratuita e adicione potencialidades avançadas à medida que a sua faturação expandir.
          </p>
        </div>

        {/* Alternador de Preço Mensal / Anual */}
        <div className="lp-billing-toggle">
          <span className={`lp-toggle-label ${billingCycle === 'monthly' ? 'active' : ''}`} onClick={() => setBillingCycle('monthly')}>
            Faturação Mensal
          </span>
          <div className={`lp-toggle-switch ${billingCycle === 'yearly' ? 'yearly' : ''}`} onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
            <div className="lp-toggle-handle"></div>
          </div>
          <span className={`lp-toggle-label ${billingCycle === 'yearly' ? 'active' : ''}`} onClick={() => setBillingCycle('yearly')}>
            Faturação Anual <span className="lp-discount-badge">Poupa 20%</span>
          </span>
        </div>

        {/* Tabela de Planos */}
        <div className="lp-pricing-grid">
          {/* Plano Básico */}
          <div className="lp-pricing-card">
            <h4 className="lp-pricing-name">Básico (Grátis)</h4>
            <p className="lp-pricing-desc">Perfeito para quem está a começar a registar os primeiros passos do negócio.</p>
            <div className="lp-pricing-price">
              <span className="lp-price-val">0 Kz</span>
              <span className="lp-price-period">/mês</span>
            </div>
            <ul className="lp-pricing-features">
              <li><div className="lp-pricing-check"><SvgCheck /></div> POS simplificado</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Histórico financeiro básico</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> 1 telemóvel ligado</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Score financeiro analítico</li>
              <li className="disabled"><div className="lp-pricing-check"><SvgCheck /></div> Exportação ilimitada PDF/Excel</li>
              <li className="disabled"><div className="lp-pricing-check"><SvgCheck /></div> Consultoria corporativa</li>
            </ul>
            <a href="#baixar" className="lp-btn lp-btn-secondary">Começar Grátis</a>
          </div>

          {/* Plano Pro (Destaque) */}
          <div className="lp-pricing-card featured">
            <div className="lp-pricing-featured-label">Mais Popular</div>
            <h4 className="lp-pricing-name">Pro</h4>
            <p className="lp-pricing-desc">A melhor opção para comerciantes que precisam exportar relatórios frequentes.</p>
            <div className="lp-pricing-price">
              <span className="lp-price-val">
                {billingCycle === 'monthly' ? '1.500 Kz' : '1.200 Kz'}
              </span>
              <span className="lp-price-period">/mês {billingCycle === 'yearly' && '(cobrado anualmente)'}</span>
            </div>
            <ul className="lp-pricing-features">
              <li><div className="lp-pricing-check"><SvgCheck /></div> Todo o plano básico</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Relatórios avançados</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Até 3 telemóveis ligados</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Exportação ilimitada PDF/Excel</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Suporte prioritário no WhatsApp</li>
              <li className="disabled"><div className="lp-pricing-check"><SvgCheck /></div> Conexão direta bancária premium</li>
            </ul>
            <button onClick={() => onNavigate('login')} className="lp-btn lp-btn-primary">Escolher Pro</button>
          </div>

          {/* Plano Premium */}
          <div className="lp-pricing-card">
            <h4 className="lp-pricing-name">Premium</h4>
            <p className="lp-pricing-desc">Indicado para PMEs estruturadas que buscam captação imediata de crédito.</p>
            <div className="lp-pricing-price">
              <span className="lp-price-val">
                {billingCycle === 'monthly' ? '5.000 Kz' : '4.000 Kz'}
              </span>
              <span className="lp-price-period">/mês {billingCycle === 'yearly' && '(cobrado anualmente)'}</span>
            </div>
            <ul className="lp-pricing-features">
              <li><div className="lp-pricing-check"><SvgCheck /></div> Todo o plano Pro</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Dispositivos ilimitados</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Conexão direta bancária premium</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Gestão empresarial e alertas</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Consultoria estratégica</li>
              <li><div className="lp-pricing-check"><SvgCheck /></div> Prioridade máxima em financiamento</li>
            </ul>
            <button onClick={() => onNavigate('login')} className="lp-btn lp-btn-secondary">Escolher Premium</button>
          </div>
        </div>

        {/* 
          CALCULADORA À LA CARTE INTELIGENTE
        */}
        <div className="lp-calculator-container">
          <div className="lp-calc-header">
            <h3>Precisa de suporte personalizado à la carte?</h3>
            <p>Marque os serviços adicionais pontuais que deseja e simule na hora o investimento estimado total para o seu projeto.</p>
          </div>

          <div className="lp-calc-grid">
            <div className="lp-calc-list">
              {alaCarteServices.map(service => {
                const isActive = selectedServices.some(s => s.id === service.id);
                return (
                  <div key={service.id} className={`lp-calc-item ${isActive ? 'active' : ''}`} onClick={() => toggleService(service.id, service.price)}>
                    <div className="lp-calc-checkbox">
                      {isActive && <SvgCheck />}
                    </div>
                    <div className="lp-calc-details">
                      <h5>{service.name}</h5>
                      <p>{service.desc}</p>
                    </div>
                    <div className="lp-calc-price">
                      +{service.price.toLocaleString('pt-AO')} Kz
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lp-calc-result-box">
              <h4>Resumo da Simulação</h4>
              <div className="lp-calc-summary-total">
                {totalExtraServices.toLocaleString('pt-AO')} Kz
              </div>
              <p className="lp-calc-summary-desc">
                Investimento único pontual estimativo de adicionais.
              </p>
              <button onClick={() => { onNavigate('login'); }} className="lp-btn lp-btn-primary" style={{ width: '100%' }}>
                Contratar Adicionais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        9. SOCIAL PROOF / TESTIMONIALS (Testemunhos)
        ======================================== 
      */}
      <section className="lp-testimonials">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">O que dizem os nossos empreendedores</h2>
          <p className="lp-section-subtitle">
            Veja como a transição do informal para o formal gerou impacto real na faturação de lojas e mercados angolanos.
          </p>
        </div>

        <div className="lp-testimonials-layout">
          {/* Card de Vídeo Simulado - Clicar abre modal de alta fidelidade */}
          <div className="lp-video-card" onClick={() => setIsVideoModalOpen(true)}>
            <img src="/E4.jpeg" alt="Maria J. na sua loja em Luanda" className="lp-video-thumbnail" />
            <div className="lp-video-overlay">
              <button className="lp-play-btn"><SvgPlay width={28} height={28} /></button>
              <div className="lp-video-caption">
                <p className="lp-video-quote">"Antes não tinha registos e o banco dizia não. Agora tenho crédito aprovado!"</p>
                <span className="lp-video-author">Maria J., Proprietária de Salão e Loja, Luanda (+25% vendas)</span>
              </div>
            </div>
          </div>

          <div className="lp-testimonials-list">
            <div className="lp-testimonial-card">
              <div className="lp-testimonial-stars">★★★★★</div>
              <p className="lp-testimonial-text">
                "O app da Kangonga mudou a organização total do meu negócio. Eu vendia muito em Cabinda, mas não conseguia provar nada ao banco. O score financeiro salvou o meu stock."
              </p>
              <div className="lp-testimonial-user">
                <div className="lp-testimonial-avatar">JM</div>
                <div className="lp-testimonial-name">
                  <h5>José M.</h5>
                  <p>Comerciante Alimentar, Cabinda</p>
                </div>
              </div>
            </div>

            <div className="lp-testimonial-card">
              <div className="lp-testimonial-stars">★★★★★</div>
              <p className="lp-testimonial-text">
                "Finalmente consigo organizar as minhas contas e saídas diárias sem complicação. Funciona sem gastar os meus dados de internet, o que é perfeito para a nossa província."
              </p>
              <div className="lp-testimonial-user">
                <div className="lp-testimonial-avatar">AK</div>
                <div className="lp-testimonial-name">
                  <h5>Ana K.</h5>
                  <p>Dona de Boutique de Roupas, Huíla</p>
                </div>
              </div>
            </div>

            <div className="lp-testimonial-card">
              <div className="lp-testimonial-stars">★★★★★</div>
              <p className="lp-testimonial-text">
                "O suporte deles para formalizar a minha microempresa no INAPEM foi impecável. Consegui o meu certificado em tempo recorde e o meu primeiro leitor de cartões de débito."
              </p>
              <div className="lp-testimonial-user">
                <div className="lp-testimonial-avatar">PS</div>
                <div className="lp-testimonial-name">
                  <h5>Pedro S.</h5>
                  <p>Oficina Mecânica, Luanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--kangonga-text-muted)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 24px', backgroundColor: 'var(--kangonga-soft-bg)', borderRadius: '99px' }}>
            🎉 Mais de 5.000 empreendedores ativos crescem connosco todas as semanas.
          </span>
        </div>
      </section>

      {/* 
        ========================================
        10. CASE STUDY / SUCCESS STORY
        ======================================== 
      */}
      <section className="lp-case">
        <div className="lp-case-container">
          <div className="lp-case-image" style={{ backgroundImage: "url('/E2.jpeg')" }}>
            <div className="lp-case-image-overlay">
              <div className="lp-case-image-label">
                <h4>A história de sucesso do José</h4>
                <p>Retalhista e Distribuidor de Bebidas, Cabinda</p>
              </div>
            </div>
          </div>

          <div className="lp-case-body">
            <h3>Estudo de Caso: O Salto da Loja do José</h3>
            
            <div className="lp-case-story-block">
              <h5>Desafio Inicial:</h5>
              <p>
                O José geria a sua distribuidora informal há mais de 3 anos. Embora faturasse valores consideráveis mensalmente, não guardava provas financeiras organizadas e os bancos recusavam microcréditos de expansão por falta de documentação do negócio.
              </p>
            </div>

            <div className="lp-case-story-block">
              <h5>Solução da Kangonga:</h5>
              <p>
                Durante 6 meses, o José usou diariamente a aplicação da Kangonga para lançar todas as suas transações e vendas (usando muito o modo offline no armazém). O sistema gerou um score de crédito forte de 720/1000 com histórico detalhado e auditável.
              </p>
            </div>

            <div className="lp-case-results-grid">
              <div className="lp-case-result-item">
                <SvgChartUp />
                <div className="lp-case-result-text">
                  <p>Acesso a Crédito</p>
                  <h6>500.000 Kz Obtidos</h6>
                </div>
              </div>
              <div className="lp-case-result-item">
                <SvgBox />
                <div className="lp-case-result-text">
                  <p>Aumento de Stock</p>
                  <h6>+40% no Armazém</h6>
                </div>
              </div>
              <div className="lp-case-result-item">
                <SvgDoc />
                <div className="lp-case-result-text">
                  <p>Burocracia</p>
                  <h6>Formalizado em 30 dias</h6>
                </div>
              </div>
              <div className="lp-case-result-item">
                <SvgPeople />
                <div className="lp-case-result-text">
                  <p>Impacto Social</p>
                  <h6>2 Empregos Criados</h6>
                </div>
              </div>
            </div>

            <button className="lp-btn lp-btn-primary" onClick={() => setIsCaseModalOpen(true)}>
              Ler história completa <SvgArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        11. FAQ SECTION (Objection Handling Accordion)
        ======================================== 
      */}
      <section className="lp-faq" id="faq">
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h2 className="lp-section-title">Perguntas Frequentes</h2>
          <p className="lp-section-subtitle">
            Esclareça as suas dúvidas e compreenda como a Kangonga protege, gere e potencia o crescimento da sua marca.
          </p>
        </div>

        <div className="lp-faq-container">
          {faqItems.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className={`lp-faq-item ${isOpen ? 'active' : ''}`}>
                <button className="lp-faq-question-btn" onClick={() => setActiveFaq(isOpen ? null : index)}>
                  <span className="lp-faq-question">{faq.q}</span>
                  <span className="lp-faq-chevron"><SvgChevronDown /></span>
                </button>
                <div className="lp-faq-answer-container" style={{ display: isOpen ? 'block' : 'none' }}>
                  <p className="lp-faq-answer">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lp-faq-footer">
          <p>Ainda tem alguma dúvida sobre o nosso suporte?</p>
          <a href="mailto:contato@kangonga.ao">Fale com os nossos especialistas no suporte →</a>
        </div>
      </section>

      {/* 
        ========================================
        12. FINAL CTA SECTION (Closing)
        ======================================== 
      */}
      <section className="lp-final-cta" id="baixar">
        <div className="lp-final-container">
          <h2>Pronto para transformar o seu negócio?</h2>
          <p>
            Junte-se hoje a mais de 5.000 microempreendedores angolanos ativos que usam e recomendam a plataforma Kangonga diariamente para crescer.
          </p>

          <div style={{ marginBottom: '30px' }}>
            <button onClick={() => onNavigate('login')} className="lp-btn lp-btn-white" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
              Criar Conta Gratuita Agora
            </button>
          </div>

          <div className="lp-store-badges">
            <a href="#" className="lp-store-btn" onClick={(e) => e.preventDefault()}>
              <span className="lp-store-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvgAndroid />
              </span>
              <div className="lp-store-text">
                <p>Disponível na</p>
                <h6>Google Play</h6>
              </div>
            </a>
            <a href="#" className="lp-store-btn" onClick={(e) => e.preventDefault()}>
              <span className="lp-store-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvgApple />
              </span>
              <div className="lp-store-text">
                <p>Descarregue na</p>
                <h6>App Store</h6>
              </div>
            </a>
          </div>

          <div className="lp-final-bullets">
            <div className="lp-final-bullet">
              <span className="lp-final-bullet-icon"><SvgCheck /></span> Instalação em 2 minutos
            </div>
            <div className="lp-final-bullet">
              <span className="lp-final-bullet-icon"><SvgCheck /></span> Sem necessidade de cartão de crédito
            </div>
            <div className="lp-final-bullet">
              <span className="lp-final-bullet-icon"><SvgCheck /></span> Suporte em português angolano
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        13. FOOTER
        ======================================== 
      */}
      <footer className="lp-footer">
        <div className="lp-footer-grid">
          <div className="lp-footer-info">
            <a href="#" className="lp-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
              <svg viewBox="0 0 42 42" width="28" height="28" style={{ fill: 'var(--kangonga-primary)' }}>
                <rect x="5" y="20" width="8" height="17" rx="2" />
                <rect x="17" y="12" width="8" height="25" rx="2" />
                <rect x="29" y="4" width="8" height="33" rx="2" />
                <rect x="0" y="38" width="42" height="4" rx="1" />
              </svg>
              <span className="lp-logo-text" style={{ fontSize: '1.25rem' }}>KANGONGA</span>
            </a>
            <p>
              Transformando a economia informal angolana em formal através da tecnologia e da inteligência financeira inclusiva.
            </p>
            <div className="lp-footer-social">
              <a href="#" className="lp-social-link" onClick={(e) => e.preventDefault()}>FB</a>
              <a href="#" className="lp-social-link" onClick={(e) => e.preventDefault()}>IG</a>
              <a href="#" className="lp-social-link" onClick={(e) => e.preventDefault()}>LN</a>
              <a href="#" className="lp-social-link" onClick={(e) => e.preventDefault()}>TW</a>
            </div>
          </div>

          <div>
            <h5 className="lp-footer-title">Produto</h5>
            <ul className="lp-footer-links">
              <li><a href="#apps">Features</a></li>
              <li><a href="#servicos">Planos e Preços</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
            </ul>
          </div>

          <div>
            <h5 className="lp-footer-title">Legal</h5>
            <ul className="lp-footer-links">
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacidade de Dados</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Termos de Serviço</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Acordo de Utilização</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Licenças Locais</a></li>
            </ul>
          </div>

          <div>
            <h5 className="lp-footer-title">Contacto</h5>
            <ul className="lp-footer-contact-list">
              <li className="lp-footer-contact-item">
                <SvgMail />
                <span>contato@kangonga.ao</span>
              </li>
              <li className="lp-footer-contact-item">
                <SvgPhone />
                <span>+244 923 000 000</span>
              </li>
              <li className="lp-footer-contact-item">
                <SvgMapPin />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <p>© 2026 Kangonga - Startupe Kwata. Todos os direitos reservados.</p>
          <p style={{ fontWeight: '600', color: 'var(--kangonga-text-main)' }}>
            Feito com <SvgHeart /> em Angola
          </p>
        </div>
      </footer>

      {/* 
        ========================================
        MODAL 1: TESTEMUNHO EM VÍDEO (Simulado)
        ======================================== 
      */}
      <div className={`lp-modal-backdrop ${isVideoModalOpen ? 'active' : ''}`} onClick={() => setIsVideoModalOpen(false)}>
        <div className="lp-modal-content lp-video-player-modal" onClick={(e) => e.stopPropagation()}>
          <button className="lp-modal-close" onClick={() => setIsVideoModalOpen(false)}>✕</button>
          
          <div className="lp-video-screen">
            <div className="lp-video-frame-content">
              {/* Vídeo Simulado - Um visualizador animado ultra-realista que reflete a estética premium */}
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '40px', position: 'relative' }}>
                
                {/* Background simulado de vídeo de alta fidelidade */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(15,23,42,0.4), rgba(15,23,42,0.8)), url(/E4.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }}></div>
                
                <div style={{ zIndex: 2, textAlign: 'center', maxWidth: '500px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(22, 163, 74, 0.3)', border: '1px solid var(--kangonga-primary)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', color: '#4ade80' }}>
                    <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.5s infinite' }}></span> História Real
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>
                    "O microcrédito me deu o fôlego necessário para aumentar a faturação do meu salão em 25%."
                  </h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    — Maria J., Proprietária do Salão Maria Beleza, Luanda
                  </p>
                </div>
              </div>
            </div>

            {/* Barra de Controlos Realistas do Player de Vídeo */}
            <div className="lp-video-controls">
              <div className="lp-video-timeline-bg" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const percent = Math.min(Math.max((clickX / rect.width) * 100, 0), 100);
                setVideoProgress(percent);
                const seconds = Math.floor((60 * percent) / 100);
                setVideoTime(`0:${seconds < 10 ? '0' : ''}${seconds}`);
              }}>
                <div className="lp-video-timeline-fill" style={{ width: `${videoProgress}%` }}></div>
                <div className="lp-video-timeline-handle" style={{ left: `${videoProgress}%` }}></div>
              </div>

              <div className="lp-video-buttons-bar">
                <div className="lp-video-left-controls">
                  <button className="lp-video-control-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <SvgPause /> : <SvgPlay width={14} height={14} />}
                  </button>
                  <button className="lp-video-control-btn" onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <SvgVolumeMute /> : <SvgVolumeHigh />}
                  </button>
                  <span className="lp-video-time">{videoTime} / 1:00</span>
                </div>
                <div className="lp-video-time" style={{ fontWeight: 'bold', color: 'var(--kangonga-primary)' }}>
                  HD 1080p
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================
        MODAL 2: CASE STUDY (Estudo de Caso)
        ======================================== 
      */}
      <div className={`lp-modal-backdrop ${isCaseModalOpen ? 'active' : ''}`} onClick={() => setIsCaseModalOpen(false)}>
        <div className="lp-modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '40px' }}>
          <button className="lp-modal-close" onClick={() => setIsCaseModalOpen(false)}>✕</button>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--kangonga-soft-bg)', border: '1px solid var(--kangonga-primary)', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', color: 'var(--kangonga-primary)' }}>
            Estudo de Caso Completo
          </div>
          
          <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--kangonga-dark)', marginBottom: '16px' }}>
            Como o José formalizou o negócio em 30 dias e comprou stock para a época alta
          </h2>
          
          <div style={{ color: 'var(--kangonga-text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '16px', lineHeight: '1.6' }}>
            <p>
              O José é um comerciante nato. Na sua pequena distribuidora de bebidas na periferia de Cabinda, ele sempre conseguiu manter uma faturação saudável vendendo para retalhistas locais. Porém, o negócio existia sob total informalidade: transações em dinheiro físico, sem declaração e sem registos de custos.
            </p>
            <p>
              <em>"Eu ia aos bancos para pedir crédito e comprar o stock adiantado antes do final do ano para garantir preços mais baixos. Mas eles olhavam para mim e viam um fantasma financeiro. Pedi ajuda a amigos e nada resultou."</em>, confessa José.
            </p>
            
            <div style={{ backgroundColor: 'var(--kangonga-gray-light)', padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--kangonga-primary)', margin: '12px 0' }}>
              <h5 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--kangonga-dark)', marginBottom: '8px' }}>O Ponto de Viragem: O Score Kangonga</h5>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                José começou a usar a aplicação Kangonga no telemóvel por recomendação de um colega da associação comercial local. Ele registou fielmente cada fardo de bebidas vendido, cada despesa de transporte e custos com funcionários. Em apenas 6 meses, o seu score subiu para 720, provando de forma cabal a sua capacidade contínua de faturação mensal de forma estruturada.
              </p>
            </div>

            <p>
              O banco parceiro Krad analisou a proposta enviada automaticamente através da nossa plataforma e concedeu-lhe o crédito no valor de <strong>500.000 Kz</strong> em taxas favoráveis. Com a segurança jurídica e financeira obtida, José pôde:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Adquirir stock 40% superior a preços muito competitivos de grossistas.</li>
              <li>Acelerar a formalização jurídica completa (Certificado de Microempresa) em parceria com a Kangonga e o INAPEM.</li>
              <li>Contratar dois novos funcionários para auxiliar na distribuição física.</li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button onClick={() => { setIsCaseModalOpen(false); onNavigate('login'); }} className="lp-btn lp-btn-primary">
                Registe o seu negócio grátis agora
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
