import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Surprise() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <section className="surprise-section" aria-label="A little surprise">
      <span className="surprise-label">P.S. I made you something</span>
      <button className="surprise-button" onClick={() => setOpen(true)}>
        {siteContent.surprise.button}<span aria-hidden="true">↗</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="surprise-overlay"
            role="presentation"
            onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="surprise-close icon-button" ref={closeRef} onClick={() => setOpen(false)} aria-label="Close surprise"><X /></button>
            <motion.div
              className="surprise-message"
              role="dialog"
              aria-modal="true"
              aria-labelledby="surprise-title"
              initial={{ opacity: 0, y: 18, scale: 0.97, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span className="surprise-heart" animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} aria-hidden="true">♡</motion.span>
              <span className="eyebrow">{siteContent.surprise.eyebrow}</span>
              <h2 id="surprise-title">{siteContent.surprise.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
              <p>{siteContent.surprise.message}</p>
              <button className="surprise-close-text" onClick={() => setOpen(false)}>{siteContent.surprise.closeLabel}<span>↗</span></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
