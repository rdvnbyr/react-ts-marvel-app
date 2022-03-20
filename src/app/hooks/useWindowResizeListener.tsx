import { useEffect, useState } from 'react';

export function useWindowResizeListener() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return width;
}
