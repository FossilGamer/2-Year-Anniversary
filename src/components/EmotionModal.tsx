import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Emotion } from '../data/content';

type EmotionModalProps = {
  emotion: Emotion | null;
  onClose: () => void;
};

export default function EmotionModal({ emotion, onClose }: EmotionModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!emotion) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [emotion, onClose]);

  return (
    <AnimatePresence>
      {emotion && (
        <motion.div
          className="emotion-backdrop"
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.section
            className="emotion-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="emotion-title"
            initial={{ opacity: 0, scale: 0.94, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.97, y: 8, filter: 'blur(5px)' }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          >
            <button ref={closeRef} className="emotion-close icon-button" onClick={onClose} aria-label="Close message"><X size={18} /></button>
            <span className="emotion-dialog-emoji" aria-hidden="true">{emotion.emoji}</span>
            <span className="eyebrow">A little note, just for you</span>
            <h2 id="emotion-title">For when you feel {emotion.name.toLowerCase()}.</h2>
            <p>{emotion.message}</p>
            <span className="emotion-dialog-signature">With all my love <span>♡</span></span>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
