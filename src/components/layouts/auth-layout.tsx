import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/auth.context.tsx';
import { useEffect } from 'react';

export default function AuthLayout() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="h-screen grid md:grid-cols-2">
      <div className="bg-black text-white px-4 py-10 hidden md:flex justify-between flex-col">
        <h2 className="text-3xl">AI Writer Assistant</h2>
        <p>
          Acme Inc “This library has saved me countless hours of work and helped
          me deliver stunning designs to my clients faster than ever before.”
        </p>
      </div>
      <div className="flex items-center px-4">
        <Outlet />
      </div>
    </div>
  );
}
