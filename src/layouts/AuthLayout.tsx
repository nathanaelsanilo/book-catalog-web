import { Outlet } from '@tanstack/react-router';

const AuthLayout = () => {
  return (
    <div className='bg-slate-100 h-full'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
