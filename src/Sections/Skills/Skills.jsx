import styles from './SkillsStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';

const skillCategories = [
  {
    key: 'frontend',
    icon: '🎨',
    skills: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'shadcn/ui'],
  },
  {
    key: 'backend',
    icon: '⚙️',
    skills: ['Java (Spring Boot)', 'Spring Security', 'Node.js (NestJS)', 'REST APIs', 'JWT Auth'],
  },
  {
    key: 'database',
    icon: '🗄️',
    skills: ['Supabase (PostgreSQL)', 'MySQL'],
  },
  {
    key: 'ai',
    icon: '🤖',
    skills: ['OpenAI APIs', 'Anthropic (Claude)', 'AI-Assisted Workflows'],
  },
  {
    key: 'infra',
    icon: '🚀',
    skills: ['Docker', 'Git/GitHub', 'RabbitMQ', 'Vercel'],
  },
  {
    key: 'tools',
    icon: '🛠️',
    skills: ['Postman', 'Swagger', 'Figma'],
  },
];

const categoryLabels = {
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    ai: 'AI Integration',
    infra: 'Infrastructure & Deployment',
    tools: 'Tools',
  },
  es: {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Base de Datos',
    ai: 'Integración IA',
    infra: 'Infraestructura & Deployment',
    tools: 'Herramientas',
  },
};

function Skills() {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">{t('skillsTitle')}</h1>
      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <div key={cat.key} className={styles.category}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <h3 className={styles.categoryTitle}>
                {categoryLabels[language][cat.key]}
              </h3>
            </div>
            <div className={styles.skillTags}>
              {cat.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;