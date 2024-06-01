import Sidebar from '@/components/dashboard/sidebar.tsx';
import Navbar from '@/components/dashboard/navbar.tsx';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '@/contexts/app.context';
import { FormEvent } from 'react';

export default function DashboardLayout() {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const handleOverlayClick = (e: FormEvent) => {
    e.stopPropagation();
    toggleSidebar();
  };
  return (
    <div className="h-screen flex">
      <span className="hidden md:block">
        <Sidebar />
      </span>

      {sidebarOpen && (
        <div className={`absolute md:hidden bg-white`}>
          <div
            className="absolute h-screen w-screen z-10 bg-white bg-opacity-45 backdrop-blur-sm bg-white/30 top-0"
            onClick={handleOverlayClick}
          >
            <div
              className={`absolute shadow-md `}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar />
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        <Navbar />
        <div className="p-2 md:p-4 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
