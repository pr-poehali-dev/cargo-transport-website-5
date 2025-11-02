import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 group"
          aria-label="Вверх"
        >
          <Button
            size="lg"
            className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary text-white shadow-2xl hover:shadow-3xl transition-all hover:scale-110 p-0"
          >
            <Icon name="ArrowUp" className="h-8 w-8" />
          </Button>
          <span className="absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Наверх
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
