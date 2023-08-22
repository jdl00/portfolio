import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Flashlight from './index';

describe('<Flashlight />', () => {
  it('renders with initial styles', () => {
    const { getByTestId } = render(<Flashlight />);
    const circle = getByTestId('flashlight-circle');

    // Check for the radial-gradient background
    expect(circle).toHaveStyle('background: radial-gradient(circle at center, rgba(43, 86, 154, 0.15), rgba(50, 44, 80, 0.05), transparent)');
  });

  it('resizes based on window size', () => {
    const { getByTestId, rerender } = render(<Flashlight />);
    const circle = getByTestId('flashlight-circle');

    // Mock window size and trigger resize
    act(() => {
      (global as any).innerWidth = 500;
      (global as any).innerHeight = 500;
      fireEvent(window, new Event('resize'));
    });

    rerender(<Flashlight />);

    // Ensure the circle diameter has adjusted based on the window resize logic
    // This is based on the logic, (500+500)/2 * 0.7 = 350
    const expectedDiameter = '350px';
    expect(circle).toHaveStyle(`width: ${expectedDiameter}`);
    expect(circle).toHaveStyle(`height: ${expectedDiameter}`);
  });

  it('moves based on mouse movement', () => {
    const { getByTestId } = render(<Flashlight />);
    const circle = getByTestId('flashlight-circle');

    act(() => {
      fireEvent.mouseMove(document, { clientX: 175, clientY: 175 });
    });

    // Checks the transform style based on mouse movement.
    expect(circle).toHaveStyle('transform: translate(0px, 0px)');
  });
});
