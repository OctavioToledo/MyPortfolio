import { useState } from "react";
import styles from "./ContactStyles.module.css";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../common/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', ''
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // EmailJS service configuration
    const serviceId = 'service_ql1ep2m';
    const templateId = 'template_94rqqpd';
    const publicKey = 'fJm62_P7GLKOpPBzO';

    // Template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Octavio Toledo',
      to_email: 'octatoledo7@gmail.com',
      message: message,
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('error');
        // Clear error message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">{t('contactTitle')}</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder={t('namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={t('messagePlaceholder')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <input 
          className="hover btn" 
          type="submit" 
          value={isLoading ? '...' : t('sendBtn')} 
          disabled={isLoading}
        />
        
        {/* Status messages */}
        {status === 'success' && (
          <div className={styles.successMessage}>
            {t('successMessage')}
          </div>
        )}
        {status === 'error' && (
          <div className={styles.errorMessage}>
            {t('errorMessage')}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
