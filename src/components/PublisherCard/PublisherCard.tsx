import { Menu } from '@headlessui/react';
import { Link } from '@tanstack/react-router';
import { FiBookOpen } from 'react-icons/fi';
import { GoKebabHorizontal } from 'react-icons/go';
import { GrArticle } from 'react-icons/gr';

type Props = {
  name?: string;
  email?: string;
  secureId: string;
};

const PublisherCard = ({ name, email, secureId }: Props) => {
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
            <Menu as='div' className='relative inline-block'>
              <div>
                <Menu.Button className='rounded-full p-2 transition-all hover:bg-gray-200'>
                  <GoKebabHorizontal className='w-4 h-4 text-gray-500' />
                </Menu.Button>
              </div>
              <Menu.Items className='absolute right-0 mt-1 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
                <div className='p-1'>
                  <Link
                    to={'/publisher/$publisherId'}
                    params={{ publisherId: secureId }}
                  >
                    <Menu.Item
                      as='button'
                      className='text-gray-700 px-2 py-2 text-sm w-full text-left ui-active:bg-gray-100 rounded-md flex items-center'
                    >
                      <FiBookOpen className='h-4 w-4 mr-2 text-gray-400 ui-active:text-gray-700' />
                      <span>View</span>
                    </Menu.Item>
                  </Link>
                </div>
              </Menu.Items>
            </Menu>
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
