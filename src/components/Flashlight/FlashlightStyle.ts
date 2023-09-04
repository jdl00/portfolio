import { styled } from '@mui/system';

// Interface for the diameter of the gradient circle
interface StyledBoxProps {
  circleDiameter: number;
}

// Styling for the gradient circle
// TODO: If colors are reused moved into global style, or at least use global style?
export const StyledBox = styled('div')<StyledBoxProps>(({ circleDiameter }) => ({
  width: '100%',
  height: 'calc(100vh)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 999,
  pointerEvents: 'none',

  '.circle': {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: '50%',
    position: 'absolute',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at center, rgba(43, 86, 154, 0.15), rgba(50, 44, 80, 0.05), transparent)',
    transition: 'transform 0.05s linear',
  },
}));
