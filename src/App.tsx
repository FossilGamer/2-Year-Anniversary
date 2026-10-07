import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Emotions from './components/Emotions';
import Surprise from './components/Surprise';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready');
    return () => document.documentElement.classList.remove('js-ready');
  }, []);

  return (
    <>
      <a className="skip-link" href="#story">Skip to our story</a>
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Timeline />
        <Emotions />
        <Surprise />
      </main>
      <Footer />
    </>
  );
}
