import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../data/content';

const links = [
  { id: 'home', label: siteContent.navigation.home },
  { id: 'story', label: siteContent.navigation.story },
  { id: 'memories', label: siteContent.navigation.memories },
  { id: 'photos', label: siteContent.navigation.photos },
  { id: 'feelings', label: siteContent.navigation.feelings },
  { id: 'final', label: siteContent.navigation.final },
];

export default function Navigation() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.15, 0.35] },
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const navigate = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-nav">
      <button className="nav-mark" onClick={() => navigate('home')} aria-label="Back to home">
        <span className="nav-mark-icon">a.</span>
        <span>FOR THE TWO OF US</span>
      </button>
      <nav className="desktop-links" aria-label="Main navigation">
        {links.map((link) => (
          <button
            key={link.id}
            className={`nav-link ${active === link.id ? 'is-active' : ''}`}
            onClick={() => navigate(link.id)}
            aria-current={active === link.id ? 'location' : undefined}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <button
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => navigate(link.id)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.025 }}
              >
                <span>0{index + 1}</span>
                {link.label}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
