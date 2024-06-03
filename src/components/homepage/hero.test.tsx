import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/homepage/hero.tsx';
import { MemoryRouter } from 'react-router-dom';

import * as authContext from '@/contexts/auth.context.tsx';
import { TRegisteredUser } from '@/shared/types/registered-user.ts';

const renderHero = (user: TRegisteredUser | null) => {
  vi.spyOn(authContext, 'useAuthContext').mockReturnValue({
    user,
    logoutUser: vi.fn(),
    registerUser: vi.fn(),
    loginUser: vi.fn(),
  });
  render(
    <MemoryRouter>
      <authContext.AuthProvider>
        <Hero />
      </authContext.AuthProvider>
    </MemoryRouter>
  );
};

describe('Homepage Hero', () => {
  it('should render the register', () => {
    renderHero(null);
    const registerButton = screen.getByTestId('@hero/register-link');
    expect(registerButton).toBeInTheDocument();
  });

  it('should render the dashboard link if user is authenticated', () => {
    renderHero({
      login: 'login',
      password: 'password',
      createdAt: new Date(),
    });
    const dashboardLink = screen.getByTestId('@hero/dashboard-link');
    expect(dashboardLink).toBeInTheDocument();
  });
});
