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
    powipTitle: 'Powip',
    powipDesc: 'Business Manager',
    progestionTitle: 'ProGestion',
    progestionDesc: 'Appointment Manager',
    panteraTitle: 'Pantera Store',
    panteraDesc: 'Instruments Shop',
    
    // Skills
    skillsTitle: 'Skills',
    specialtyTitle: 'Backend Specialty',
    
    // About Me
    aboutTitle: 'About Me',
    aboutText: `Hello! 👋 I'm Octavio, 23 years old, and I'm passionate about the world of technology. 👨‍💻 As a Fullstack Developer, I've been working freelance on SAAS projects and microservices architecture for 5 months. I graduated as a University Technician in Programming and I thrive on solving complex problems, especially in backend development with Java and Spring Boot. Currently, I'm working at Powip, developing enterprise management solutions.`,
    
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
    powipTitle: 'Powip',
    powipDesc: 'Gestor Empresarial',
    progestionTitle: 'ProGestion',
    progestionDesc: 'Manager de Turnos',
    panteraTitle: 'Pantera Store',
    panteraDesc: 'Tienda de Instrumentos',
    
    // Skills
    skillsTitle: 'Habilidades',
    specialtyTitle: 'Especialidad Backend',
    
    // About Me
    aboutTitle: 'Sobre Mí',
    aboutText: `¡Hola! 👋 Soy Octavio, tengo 23 años y me apasiona el mundo de la tecnología. 👨‍💻 Como Desarrollador Fullstack, llevo 5 meses trabajando freelance en proyectos SAAS y arquitectura de microservicios. Me gradué como Técnico Universitario en Programación y disfruto resolver problemas complejos, especialmente en desarrollo backend con Java y Spring Boot. Actualmente, trabajo en Powip, desarrollando soluciones de gestión empresarial.`,
    
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
