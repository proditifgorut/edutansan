import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional: use "smooth" for smooth scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
