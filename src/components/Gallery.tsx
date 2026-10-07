import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { siteContent } from '../data/content';
import { mediaPath } from '../lib/media';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  return (
    <section className="gallery-section section-pad" id="photos">
      <div className="section-heading gallery-heading">
        <div>
          <span className="eyebrow">{siteContent.gallery.eyebrow}</span>
          <h2>{siteContent.gallery.title}</h2>
        </div>
        <p>{siteContent.gallery.description}</p>
      </div>
      <div className="gallery-grid">
        {siteContent.gallery.photos.map((photo, index) => (
          <motion.button
            className={`gallery-card gallery-card-${index + 1}`}
            key={`${photo.src}-${index}`}
            onClick={() => setSelected(index)}
            aria-label={`Open photo: ${photo.caption}`}
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
          >
            <div className={`gallery-image-wrap ${photo.src ? '' : 'is-placeholder'}`}>
              {photo.src && (
                <img
                  src={mediaPath(photo.src)}
                  alt={photo.alt}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    event.currentTarget.parentElement?.classList.add('is-placeholder');
                  }}
                />
              )}
              <div className="photo-placeholder" aria-hidden="true">
                <span className="placeholder-mark">✳</span>
                <span>{siteContent.gallery.placeholder}</span>
              </div>
              <span className="gallery-expand"><Expand size={15} /></span>
            </div>
            <span className="gallery-caption"><span>{photo.caption}</span><span>0{index + 1}</span></span>
          </motion.button>
        ))}
      </div>
      <Lightbox
        photos={siteContent.gallery.photos}
        index={selected}
        onClose={() => setSelected(null)}
        onChange={setSelected}
      />
    </section>
  );
}
