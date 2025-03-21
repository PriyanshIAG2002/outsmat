import { useEffect, useState } from 'react';
import { Preloader } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages"
import Lenis from "lenis";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Reduced from 2.5 for faster scrolling
      smoothWheel: true,
      wheelMultiplier: 0.5, // Increased from 0.35 for faster wheel scrolling
      smoothTouch: true,
      touchMultiplier: 0.5, // Increased from 0.35 for faster touch scrolling
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      lerp: 0.1, // Increased from 0.08 for snappier response
      easing: (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const loadContent = async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    };

    loadContent();
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </>
    </>
  );
};

export default App;