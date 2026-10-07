import { motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '../data/content';

export default function Story() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="story-section section-pad" id="story">
      <div className="story-index"><span>01</span><i />A LETTER</div>
      <div className="story-content">
        <motion.div
          className="story-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="eyebrow">{siteContent.story.eyebrow}</span>
          <h2>{siteContent.story.title}</h2>
        </motion.div>
        <motion.div
          className="story-letter"
          initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.12, ease: 'easeOut' }}
        >
          <p>{siteContent.story.description}</p>
          <div className="story-signature">
            <span>{siteContent.story.signature}</span>
            <span className="signature-name">{siteContent.names.boyfriend}</span>
          </div>
        </motion.div>
      </div>
      <div className="story-flower" aria-hidden="true">✳</div>
    </section>
  );
}
