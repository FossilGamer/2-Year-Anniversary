import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const imageStyle = { backgroundImage: `url("${siteContent.hero.image}")` };
  return (
    <section className="hero-section" id="home" aria-label="Anniversary welcome">
      <div className="hero-image" style={imageStyle} role="img" aria-label={siteContent.hero.imageAlt} />
      <div className="hero-vignette" />
      <div className="hero-grain" aria-hidden="true" />
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <span className="eyebrow hero-eyebrow"><i />{siteContent.hero.eyebrow}</span>
        <h1>{siteContent.hero.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h1>
        <p>{siteContent.hero.subtitle}</p>
        <button className="hero-scroll" onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}>
          {siteContent.hero.scrollLabel}
          <span><ArrowDown size={14} /></span>
        </button>
      </motion.div>
      <div className="hero-index" aria-hidden="true"><span>01</span><i />A STORY IN TWO YEARS</div>
      <motion.div className="hero-side-note" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
        MADE WITH LOVE<br />JUST FOR YOU
      </motion.div>
    </section>
  );
}
