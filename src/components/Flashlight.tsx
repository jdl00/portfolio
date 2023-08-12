import React, { useState, useRef, useEffect, useCallback } from 'react';

import { Box } from '@mui/material';

const Flashlight: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [circleDiameter, setCircleDiameter] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const size = (window.innerWidth + window.innerHeight) / 2;
      setCircleDiameter(size * 0.7);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (circleRef.current) {
      const centerOffset = circleDiameter / 2;
      const x = e.clientX - centerOffset;
      const y = e.clientY - centerOffset;

      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [circleDiameter]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [circleDiameter, handleMouseMove]);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        '.circle': {
          width: `${circleDiameter}px`,
          height: `${circleDiameter}px`,
          borderRadius: '50%',
          position: 'absolute',
          pointerEvents: 'none',
          background: 'radial-gradient(circle at center, rgba(150, 152, 220, 0.5), rgba(50, 44, 80, 0.1),  transparent);',
          backdropFilter: 'blur(25px)',
          transition: 'transform 0.05s linear'
        }
      }}
    >
      <Box ref={circleRef} className="circle" />
    </Box>
  );

};

export default Flashlight;