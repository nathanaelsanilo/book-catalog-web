import { RButton } from '@/components';
import { Link } from '@tanstack/react-router';

const AppHeader = () => {
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
        <Link to='/signin'>
          <RButton variant='ghost'>Log in</RButton>
        </Link>
        <Link to='/signup'>
          <RButton variant='blue'>Get started</RButton>
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
