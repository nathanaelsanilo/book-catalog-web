import { RButton } from '@/components';
import { useMeQuery } from '@/hooks';
import { Menu } from '@headlessui/react';
import { Link, useNavigate } from '@tanstack/react-router';
import { HiUserCircle } from 'react-icons/hi2';
import { HiLogout } from 'react-icons/hi';

const AppHeader = () => {
  const { data, isLoading } = useMeQuery();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate({ to: '/signin' });
  };

  return (
    <header className='bg-white h-16 w-full px-16 py-4 flex items-center justify-between'>
      <div>
        <ul className='flex gap-x-4'>
          <li>
            <Link
              to='/'
              className='hover:text-blue-700 transition-all ease-in-out'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/author'
              className='hover:text-blue-700 transition-all ease-in-out'
            >
              Authors
            </Link>
          </li>
        </ul>
      </div>
      <div className='space-x-4'>
        {data && !isLoading ? (
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button>
                <HiUserCircle className='w-8 h-8 fill-gray-500 ' />
              </Menu.Button>
            </div>
            <Menu.Items className='absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
              <div className='p-1'>
                <Menu.Item
                  as='button'
                  className='text-gray-700 px-6 py-2 text-sm w-full text-left ui-active:bg-gray-100 rounded-md flex items-center'
                  onClick={handleLogout}
                >
                  <HiLogout className='h-4 w-4 mr-2 text-gray-400 ui-active:text-gray-700' />
                  <span>Sign out</span>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        ) : (
          <>
            <Link to='/signin'>
              <RButton variant='ghost'>Log in</RButton>
            </Link>
            <Link to='/signup'>
              <RButton variant='blue'>Get started</RButton>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
