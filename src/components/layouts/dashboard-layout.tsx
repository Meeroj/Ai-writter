import Sidebar from '@/components/dashboard/sidebar.tsx';
import Navbar from '@/components/dashboard/navbar.tsx';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '@/contexts/app.context';

export default function DashboardLayout() {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const handleToggleSidebar = () => {
    console.log('Bosildi');
    toggleSidebar();
  };
  return (
    <div className="h-screen overflow-x-hidden flex">
      <span className="hidden md:block">
        <Sidebar />
      </span>
      {sidebarOpen && (
        <div className={`absolut md:hidden bg-white`}>
          <div
            className="absolute h-screen w-screen z-10 bg-white bg-opacity-45 backdrop-blur-sm bg-white/30 top-0"
            onClick={handleToggleSidebar}
          >
            <div
              className={`absolute shadow-md w-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar />
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <Navbar />
        <div className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
