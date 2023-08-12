import React, { useState, useRef, useEffect, useCallback } from 'react';

import { StyledBox } from './FlashlightStyle';

/**
 * `Flashlight` Component.
 * Renders a flashlight effect that follows the mouse movement and adjusts to screen resizing.
 * The flashlight effect is achieved using a radial gradient and is represented as a circle on the screen.
 * The size and position of the circle change based on mouse movement and window resizing.
 *
 * @component
 * @example
 * ```jsx
 * <Flashlight />
 * ```
 */
const Flashlight: React.FC = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [circleDiameter, setCircleDiameter] = useState<number>(0);

  // Adjust the circle diameter if window is resized
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

  // Adjust the circle position based on mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (circleRef.current) {
      const centerOffset = circleDiameter / 2;
      const x = e.clientX - centerOffset;
      const y = e.clientY - centerOffset;

      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [circleDiameter]);

  // Update circle position based on mouse movement
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [circleDiameter, handleMouseMove]);

  // JSX rendering logic
  return (
    <StyledBox circleDiameter={circleDiameter}>
      <div ref={circleRef} className="circle" />
    </StyledBox>
  );
};

export default Flashlight;