import { useEffect } from 'react';

export const useScrollLock = (isActive: boolean): void => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isActive]);
};

export const useEscapeKeyClose = (close: () => void): void => {
  const closeOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);
};
