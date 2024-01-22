import { Link } from '@tanstack/react-router';
import { FiBookOpen } from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';
import { SlUser } from 'react-icons/sl';

interface Props {
  name: string;
  email: string;
  phone: string;
  secureId: string;
}

const AuthorCard = ({ name, email, secureId }: Props) => {
  return (
    <div className='bg-white border border-gray-300 rounded-lg w-full'>
      <div className='flex items-center justify-between w-full px-6 py-8'>
        <div className=''>
          <h4 className='text-gray-600'>{name}</h4>
          <p className='text-gray-400'>{email}</p>
        </div>
        <div>
          <SlUser className='h-9 w-9 border rounded-full fill-gray-400' />
        </div>
      </div>
      <div className='flex items-center w-full border-t border-gray-200 divide-x'>
        <div className='flex-1 flex items-center justify-center gap-x-2'>
          <Link to={'/author/$authorId'} params={{ authorId: secureId }}>
            <div className='flex items-center flex-1 justify-center py-2 px-4 gap-x-2'>
              <FiBookOpen className='h-4 w-4 stroke-gray-400' />
              <span className='text-gray-900'>View</span>
            </div>
          </Link>
        </div>
        <div className='flex flex-1 items-center justify-center gap-x-2'>
          <Link to={'/author/$authorId/edit'} params={{ authorId: secureId }}>
            <div className='flex items-center flex-1 justify-center py-2 px-4 gap-x-2'>
              <GoPencil className='h-4 w-4 fill-gray-400' />
              <span className='text-gray-900'>Edit</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
