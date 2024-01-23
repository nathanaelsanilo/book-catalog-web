import { GrArticle } from 'react-icons/gr';
import { GoKebabHorizontal } from 'react-icons/go';

type Props = {
  name?: string;
  email?: string;
};

const PublisherCard = ({ name, email }: Props) => {
  return (
    <div className='w-full'>
      {/* header */}
      <div className='border-t border-x rounded-t-lg bg-gray-100'>
        <div className='px-8 py-4 flex items-center justify-between'>
          <div className='flex-1 flex items-center gap-x-4'>
            <div className='p-4 rounded-lg border border-gray-200 bg-white'>
              <GrArticle className='w-5 h-5 text-blue-700' />
            </div>
            <h1 className='text-gray-700'>{name}</h1>
          </div>
          <div className=''>
            <button className='rounded-full p-2 transition-all hover:bg-gray-200 '>
              <GoKebabHorizontal className='w-4 h-4 text-gray-500' />
            </button>
          </div>
        </div>
      </div>
      {/* body */}
      <div className='border-x border-b rounded-b-lg'>
        <ul className=''>
          <li className='flex items-center justify-between py-4 px-8'>
            <p className='text-gray-500'>Email</p>
            <p className='text-gray-700'>{email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublisherCard;
