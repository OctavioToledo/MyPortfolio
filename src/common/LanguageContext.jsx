import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  en: {
    // Hero
    role: 'Software Developer',
    slogan: '"Crafting solutions one line at a time."',
    downloadCV: 'Download CV',
    
    // Projects
    projectsTitle: 'Projects',

    // OMTime
    omtimeTitle: 'OMTime SaaS | Multi-Branch Management Platform',
    omtimeRole: 'Co-Founder & Lead Full Stack Architect',
    omtimeDesc: 'A complete, multi-branch appointment and accounting SaaS built from scratch. Designed to solve real-world scheduling friction, featuring dynamic grids, employee availability tracking, and automated billing. Architected for scalability and shipped with a high-performance UI.',
    omtimeHL1Label: 'End-to-End Ownership',
    omtimeHL1Text: 'Designed the entire product lifecycle from Figma mockups and UML database modeling to production deployment.',
    omtimeHL2Label: 'Complex UI/UX',
    omtimeHL2Text: 'Built dynamic, interactive appointment grids and client management dashboards using modern React components and Tailwind.',
    omtimeHL3Label: 'Robust Backend',
    omtimeHL3Text: 'Architected a scalable Java Spring Boot backend using Domain-Driven Design (DDD) to handle multi-tenant logic securely.',
    omtimeHL4Label: 'Monetization Ready',
    omtimeHL4Text: 'Seamlessly integrated Mercado Pago for automated subscription and payment flows.',

    // PowipSystem
    powipTitle: 'PowipSystem | ERP & Business Management SaaS',
    powipRole: 'Full Stack Developer',
    powipDesc: 'A production-ready ERP SaaS handling critical business operations including sales, inventory, and client management. Built in a high-velocity freelance environment, leveraging microservices and asynchronous messaging for high availability and modular scaling.',
    powipHL1Label: 'Modern Frontend',
    powipHL1Text: 'Shipped responsive, data-heavy dashboards and order-tracking interfaces utilizing Next.js and TailwindCSS.',
    powipHL2Label: 'Database & Auth',
    powipHL2Text: 'Leveraged Supabase for reliable data storage and implemented secure JWT-based authentication flows.',
    powipHL3Label: 'Microservices Architecture',
    powipHL3Text: 'Decoupled Sales, Clients, and Inventory domains using Java and NestJS, optimizing system maintainability.',
    powipHL4Label: 'Asynchronous Processing',
    powipHL4Text: 'Integrated RabbitMQ for reliable inter-service messaging, ensuring zero data loss during peak inventory updates.',
    powipHL5Label: 'AI-Assisted Workflow',
    powipHL5Text: 'Utilized Claude Opus and Gemini Pro to accelerate feature shipping, refactoring, and complex API integrations.',
    
    // Link labels
    liveSystem: 'Live System',
    landing: 'Landing',

    // Skills
    skillsTitle: 'Skills',
    specialtyTitle: 'Backend Specialty',
    
    // About Me
    aboutTitle: 'About Me',
    aboutText: `Hello! 👋 I'm Octavio, 24 years old — an AI-driven Full Stack Developer building and shipping SaaS products from scratch. I have experience delivering production-ready systems in fast-paced environments with full end-to-end ownership. Strong background in Next.js, Supabase, modern frontend systems, and scalable backend architectures (Java Spring Boot / NestJS). I leverage AI tools (Claude, Gemini, OpenAI APIs) daily to accelerate development, debugging, architecture validation, and product iteration. Currently working as a freelancer developing enterprise management solutions.`,
    
    // Contact
    contactTitle: 'Contact',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    sendBtn: 'Send',
    successMessage: 'Email sent successfully! ✓',
    errorMessage: 'Error sending email. Please try again.',
    
    // Footer
    footerText: 'All rights reserved.'
  },
  es: {
    // Hero
    role: 'Desarrollador de Software',
    slogan: '"Creando soluciones, una línea a la vez."',
    downloadCV: 'Descargar CV',
    
    // Projects
    projectsTitle: 'Proyectos',

    // OMTime
    omtimeTitle: 'OMTime SaaS | Plataforma de Gestión Multi-Sucursal',
    omtimeRole: 'Co-Fundador & Arquitecto Full Stack',
    omtimeDesc: 'Un SaaS completo de gestión de turnos y contabilidad multi-sucursal construido desde cero. Diseñado para resolver fricciones reales de agendamiento, con grillas dinámicas, seguimiento de disponibilidad de empleados y facturación automatizada. Arquitectado para escalabilidad con una UI de alto rendimiento.',
    omtimeHL1Label: 'Ownership End-to-End',
    omtimeHL1Text: 'Diseñé todo el ciclo de vida del producto, desde mockups en Figma y modelado UML de base de datos hasta el deploy en producción.',
    omtimeHL2Label: 'UI/UX Compleja',
    omtimeHL2Text: 'Construí grillas de turnos dinámicas e interactivas y dashboards de gestión de clientes usando componentes React modernos y Tailwind.',
    omtimeHL3Label: 'Backend Robusto',
    omtimeHL3Text: 'Arquitecté un backend escalable con Java Spring Boot usando Domain-Driven Design (DDD) para manejar lógica multi-tenant de forma segura.',
    omtimeHL4Label: 'Listo para Monetización',
    omtimeHL4Text: 'Integré Mercado Pago para flujos automatizados de suscripción y pagos.',

    // PowipSystem
    powipTitle: 'PowipSystem | ERP & SaaS de Gestión Empresarial',
    powipRole: 'Desarrollador Full Stack',
    powipDesc: 'Un ERP SaaS listo para producción que maneja operaciones críticas de negocio incluyendo ventas, inventario y gestión de clientes. Construido en un entorno freelance de alta velocidad, aprovechando microservicios y mensajería asincrónica para alta disponibilidad y escalado modular.',
    powipHL1Label: 'Frontend Moderno',
    powipHL1Text: 'Desarrollé dashboards responsivos con alta densidad de datos e interfaces de seguimiento de pedidos usando Next.js y TailwindCSS.',
    powipHL2Label: 'Base de Datos & Auth',
    powipHL2Text: 'Aproveché Supabase para almacenamiento confiable de datos e implementé flujos de autenticación seguros basados en JWT.',
    powipHL3Label: 'Arquitectura de Microservicios',
    powipHL3Text: 'Desacoplé los dominios de Ventas, Clientes e Inventario usando Java y NestJS, optimizando la mantenibilidad del sistema.',
    powipHL4Label: 'Procesamiento Asincrónico',
    powipHL4Text: 'Integré RabbitMQ para mensajería confiable entre servicios, asegurando cero pérdida de datos durante picos de actualizaciones de inventario.',
    powipHL5Label: 'Workflow Asistido por IA',
    powipHL5Text: 'Utilicé Claude Opus y Gemini Pro para acelerar el desarrollo de features, refactoring e integraciones complejas de APIs.',

    // Link labels
    liveSystem: 'Sistema',
    landing: 'Landing',

    // Skills
    skillsTitle: 'Habilidades',
    specialtyTitle: 'Especialidad Backend',
    
    // About Me
    aboutTitle: 'Sobre Mí',
    aboutText: `¡Hola! 👋 Soy Octavio, tengo 24 años — soy un Desarrollador Full Stack impulsado por IA, construyendo y lanzando productos SaaS desde cero. Tengo experiencia entregando sistemas listos para producción en entornos de alta velocidad con ownership end-to-end. Sólida experiencia en Next.js, Supabase, sistemas frontend modernos y arquitecturas backend escalables (Java Spring Boot / NestJS). Utilizo herramientas de IA (Claude, Gemini, OpenAI APIs) diariamente para acelerar el desarrollo, debugging, validación de arquitectura e iteración de productos. Actualmente trabajo como freelancer desarrollando soluciones de gestión empresarial.`,
    
    // Contact
    contactTitle: 'Contacto',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    messagePlaceholder: 'Mensaje',
    sendBtn: 'Enviar',
    successMessage: '¡Correo enviado exitosamente! ✓',
    errorMessage: 'Error al enviar el correo. Por favor, intenta de nuevo.',
    
    // Footer
    footerText: 'Todos los derechos reservados.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'en'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
