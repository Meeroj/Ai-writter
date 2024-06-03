import { describe } from 'vitest';
import Footer from '@/components/homepage/footer.tsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Footer', () => {
  it('should have a right link to the privacy policy page', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const privacyPolicyLink = screen.getByTestId('@footer/privacy-policy');
    const href = privacyPolicyLink.getAttribute('href');
    expect(href).toBe('/privacy-policy');
  });
});
