import styles from './FooterStyles.module.css';
import { useLanguage } from '../../common/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {currentYear} Toledo Octavio. <br />
        {t('footerText')}
      </p>
    </section>
  );
}

export default Footer;