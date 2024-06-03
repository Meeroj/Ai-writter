import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import DashboardLayout from '@/components/layouts/dashboard-layout.tsx';
import DashboardHome from '@/pages/dashboard-home.tsx';
import { AppContextProvider } from '@/contexts/app.context.tsx';
import { Toaster } from 'react-hot-toast';
import { ContentContextProvider } from '@/contexts/content.context.tsx';
import DashboardContent from '@/pages/dashboard-content.tsx';
import ContentNotFound from '@/components/dashboard/content-not-found.tsx';
import Share from '@/pages/share.tsx';
import AuthLayout from '@/components/layouts/auth-layout.tsx';
import Register from '@/components/auth/register.tsx';
import { AuthProvider } from '@/contexts/auth.context.tsx';
import Login from '@/components/auth/login.tsx';
import ProtectedRoute from '@/components/auth/protected-route.tsx';
import Homepage from '@/pages/homepage.tsx';

import './i18n.ts';
import './sentry.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'content/:id',
        element: <DashboardContent />,
        errorElement: <ContentNotFound />,
      },
    ],
  },
  {
    path: 'share/:id',
    element: <Share />,
    errorElement: <ContentNotFound />,
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <AppContextProvider>
      <AuthProvider>
        <ContentContextProvider>
          <RouterProvider router={router} />
        </ContentContextProvider>
      </AuthProvider>
    </AppContextProvider>
  </React.StrictMode>
);
