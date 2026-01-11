import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/Sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pl-72">
        <main className="min-h-screen pt-16 lg:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
