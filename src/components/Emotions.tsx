import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Emotion } from '../data/content';
import { siteContent } from '../data/content';
import EmotionModal from './EmotionModal';

export default function Emotions() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <section className="emotions-section section-pad" id="feelings">
      <div className="emotions-inner">
        <div className="emotions-heading">
          <span className="eyebrow">{siteContent.emotions.eyebrow}</span>
          <h2>{siteContent.emotions.title}</h2>
          <p>{siteContent.emotions.description}</p>
        </div>
        <div className="emotion-grid">
          {siteContent.emotions.items.map((emotion, index) => (
            <motion.button
              className="emotion-card"
              key={emotion.name}
              onClick={() => setSelectedEmotion(emotion)}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35, delay: (index % 5) * 0.045 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              <span className="emotion-emoji" aria-hidden="true">{emotion.emoji}</span>
              <span>{emotion.name}</span>
              <span className="emotion-card-arrow" aria-hidden="true">↗</span>
            </motion.button>
          ))}
        </div>
        <div className="emotion-footnote"><span>20 little reminders</span><i />always here for you</div>
      </div>
      <EmotionModal emotion={selectedEmotion} onClose={() => setSelectedEmotion(null)} />
    </section>
  );
}
