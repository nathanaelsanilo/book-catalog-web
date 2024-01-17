import { Outlet } from '@tanstack/react-router';

const AuthLayout = () => {
  return (
    <div>
      <p>auth layout works!</p>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
