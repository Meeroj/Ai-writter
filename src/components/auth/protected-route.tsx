import { ReactNode } from 'react';
import { useAuthContext } from '@/contexts/auth.context.tsx';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
