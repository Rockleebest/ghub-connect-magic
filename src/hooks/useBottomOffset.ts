import { useEffect, useState } from 'react';

export const useBottomOffset = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're near the bottom (within 100px of the footer)
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
      
      setIsAtBottom(isNearBottom);
      
      // Update CSS custom property
      document.documentElement.style.setProperty(
        '--bottom-offset', 
        isNearBottom ? '80px' : '0px'
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtBottom;
};