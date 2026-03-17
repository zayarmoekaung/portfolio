import styles from '@/styleSheets/hero.module.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.hero_container} id='hero'>
      {/* Background Glow Decorations */}
      <div className={styles.glow_blob}></div>
      
      <div className={styles.hero_content}>
        <div className={`${styles.image_wrapper} sa-animation sa-fade-right`}>
          <div className={styles.image_border_accent}>
            <Image
              src='/img/zayar_moekaung.png'
              width={400}
              height={520}
              alt='Zayar Moekaung'
              className={styles.hero_img}
              priority
            />
          </div>
        </div>

        <div className={`${styles.hero_text_card} sa-animation sa-fade-left`}>
          <span className={styles.subtitle}>Crafting Seamless Digital Experiences</span>
          <h1 className={styles.title}>
            Zayar <span className={styles.highlight}>Moekaung</span>
          </h1>
          <h2 className={styles.role}>Full Stack Developer | Software Engineer</h2>
          
          <div className={styles.social_links}>
            <a href="https://github.com/zayarmoekaung" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/zayarmoekaung" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>

          <div className={styles.button_group}>
            <button className={styles.btn_primary} onClick={() => {}}>View Portfolio</button>
            <button className={styles.btn_secondary} onClick={() => {}}>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;