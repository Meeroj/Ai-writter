import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '@/components/homepage/testimonials.tsx';

describe('Testimonials', () => {
  it('should render the testimonials photo', () => {
    render(<Testimonials />);

    screen.debug();
    const photo = screen.getByTestId('@testimonials/photo');
    expect(photo).toBeInTheDocument();
  });
});
