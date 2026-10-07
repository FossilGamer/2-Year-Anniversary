import { motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '../data/content';
import { mediaPath } from '../lib/media';

export default function Timeline() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="timeline-section section-pad" id="memories">
      <div className="section-heading timeline-heading">
        <div>
          <span className="eyebrow">{siteContent.memories.eyebrow}</span>
          <h2>{siteContent.memories.title}</h2>
        </div>
        <p>{siteContent.memories.description}</p>
      </div>
      <div className="timeline-list">
        {siteContent.memories.entries.map((memory, index) => (
          <motion.article
            className={`memory-row ${index % 2 ? 'memory-row-reverse' : ''}`}
            key={`${memory.date}-${memory.title}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="memory-date">{memory.date}</div>
            <div className="memory-marker" aria-hidden="true"><i /></div>
            <div className="memory-detail">
              <span className="memory-number">CHAPTER 0{index + 1}</span>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
              {memory.image && (
                <div className="memory-image">
                  <img
                    src={mediaPath(memory.image)}
                    alt={`${memory.title} memory`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                      event.currentTarget.parentElement?.classList.add('is-placeholder');
                    }}
                  />
                  <span className="photo-placeholder" aria-hidden="true"><span className="placeholder-mark">✳</span>{siteContent.gallery.placeholder}</span>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
