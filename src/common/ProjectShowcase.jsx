import React, { useState } from 'react';
import styles from './ProjectShowcase.module.css';

function ProjectShowcase({
  icon,
  title,
  role,
  description,
  techStack,
  highlights,
  carouselImages,
  links,
  githubIcon,
  deployIcon,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = carouselImages ? carouselImages.length : 0;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        {icon && (
          <img src={icon} alt={`${title} icon`} className={styles.projectIcon} />
        )}
        <div className={styles.headerText}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.roleBadge}>⚡ {role}</span>
        </div>
      </div>

      {/* Carousel */}
      <div className={styles.carouselWrapper}>
        {totalSlides > 0 ? (
          <>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((img, i) => (
                <div key={i} className={styles.carouselSlide}>
                  {img ? (
                    <img src={img} alt={`${title} screenshot ${i + 1}`} />
                  ) : (
                    <div className={styles.carouselPlaceholder}>
                      <span className={styles.carouselPlaceholderIcon}>📸</span>
                      <span>Coming soon</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {totalSlides > 1 && (
              <>
                <button
                  className={`${styles.carouselBtn} ${styles.prevBtn}`}
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  className={`${styles.carouselBtn} ${styles.nextBtn}`}
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  ›
                </button>

                <div className={styles.carouselDots}>
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === currentSlide ? styles.dotActive : ''}`}
                      onClick={() => goToSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className={styles.carouselPlaceholder}>
            <span className={styles.carouselPlaceholderIcon}>📸</span>
            <span>Images coming soon</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className={styles.body}>
        <p className={styles.description}>{description}</p>

        {/* Tech Stack Tags */}
        <div className={styles.techTags}>
          {techStack.map((tech, i) => (
            <span key={i} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <p className={styles.highlightsTitle}>Key Highlights</p>
        <div className={styles.highlights}>
          {highlights.map((item, i) => (
            <div key={i} className={styles.highlightItem}>
              <span className={styles.highlightIcon}>▸</span>
              <p className={styles.highlightText}>
                <span className={styles.highlightLabel}>{item.label}: </span>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className={styles.links}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              {link.icon && (
                <img src={link.icon} alt="" className={styles.linkIcon} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
