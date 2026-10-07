import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { GalleryPhoto } from '../data/content';
import { mediaPath } from '../lib/media';

type LightboxProps = {
  photos: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const activePhoto = index === null ? null : photos[index];

  useEffect(() => {
    if (index === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % photos.length);
      if (event.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index, onChange, onClose, photos.length]);

  return (
    <AnimatePresence>
      {activePhoto && index !== null && (
        <motion.div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button className="lightbox-close icon-button" ref={closeRef} onClick={onClose} aria-label="Close photo viewer"><X /></button>
          {photos.length > 1 && (
            <>
              <button className="lightbox-arrow lightbox-prev icon-button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); onChange((index - 1 + photos.length) % photos.length); }}><ArrowLeft /></button>
              <button className="lightbox-arrow lightbox-next icon-button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); onChange((index + 1) % photos.length); }}><ArrowRight /></button>
            </>
          )}
          <motion.figure
            className={`lightbox-figure ${activePhoto.src ? '' : 'is-placeholder'}`}
            key={activePhoto.src}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return;
              const delta = event.changedTouches[0]?.clientX - touchStart.current;
              if (Math.abs(delta) > 50) onChange((index + (delta < 0 ? 1 : -1) + photos.length) % photos.length);
              touchStart.current = null;
            }}
          >
            {activePhoto.src && (
              <img
                src={mediaPath(activePhoto.src)}
                alt={activePhoto.alt}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.parentElement?.classList.add('is-placeholder');
                }}
              />
            )}
            <div className="lightbox-placeholder" aria-hidden="true">
              <span className="placeholder-mark">✳</span>
              <span>{activePhoto.alt}</span>
            </div>
            <figcaption><span>{activePhoto.caption}</span><span>{String(index + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span></figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
