import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Footer() {
  const reduceMotion = useReducedMotion();
  return (
    <footer className="closing-section" id="final">
      <div className="closing-glow" aria-hidden="true" />
      <motion.div
        className="closing-content"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span className="eyebrow"><i />{siteContent.closing.eyebrow}</span>
        <h2>{siteContent.closing.title}<span>{siteContent.closing.secondLine}</span></h2>
        <div className="closing-love">{siteContent.closing.loveLine}<span>{siteContent.names.girlfriend}.</span></div>
        <p>{siteContent.closing.signOff}</p>
        <div className="closing-date"><span>{siteContent.closing.dateLabel}</span><i />{siteContent.anniversary.date}</div>
      </motion.div>
      <div className="closing-bottom">
        <span><Heart size={12} /> MADE WITH LOVE, {siteContent.names.boyfriend}</span>
        <span>{siteContent.anniversary.number} YEARS & COUNTING</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={15} /></button>
      </div>
    </footer>
  );
}
