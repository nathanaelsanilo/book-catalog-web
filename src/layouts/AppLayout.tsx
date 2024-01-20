import { Outlet } from '@tanstack/react-router';
import { AppHeader } from '@/components';

const AppLayout = () => {
  return (
    <div className='bg-slate-100 h-full'>
      <div>
        <AppHeader />
      </div>
      <main className='container px-10 py-8 mx-auto bg-white rounded mt-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
