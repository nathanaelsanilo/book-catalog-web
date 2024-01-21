import { RButton, RDivider, RTitle } from '@/components';
import { useAuthorDetailQuery } from '@/hooks';
import { Link, useParams } from '@tanstack/react-router';
import { FiTrash } from 'react-icons/fi';
import { GoPencil } from 'react-icons/go';
import { useTitle } from 'react-use';

const DetailPage = () => {
  useTitle('Detail Author');
  const { authorId } = useParams({ from: '/app-layout/author/$authorId' });
  const { data, isLoading } = useAuthorDetailQuery(authorId, {
    enabled: !!authorId,
  });
  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>Author Information</RTitle>
      </div>
      <RDivider />
      <div className='container mx-auto w-1/2'>
        <h3 className='text-lg text-gray-900 mb-2'>Author Information</h3>
        <h5 className='text-sm text-gray-400 mb-8'>
          Author details and information.
        </h5>
        <ul className='divide-y divide-gray-200'>
          {data && !isLoading && (
            <>
              <li className='border-t border-gray-200'>
                <div className='flex flex-row'>
                  <div className='w-1/3 py-8'>
                    <p className='text-gray-900'>Author name</p>
                  </div>
                  <div className='flex-1 py-8'>
                    <p className='text-gray-600 font-light'>
                      {data.data.author_name}
                    </p>
                  </div>
                </div>
              </li>
              <li className='border-t border-gray-200'>
                <div className='flex flex-row'>
                  <div className='w-1/3 py-8'>
                    <p className='text-gray-900'>Email</p>
                  </div>
                  <div className='flex-1 py-8'>
                    <p className='text-gray-600 font-light'>
                      {data.data.email}
                    </p>
                  </div>
                </div>
              </li>
              <li className='border-t border-gray-200'>
                <div className='flex flex-row'>
                  <div className='w-1/3 py-8'>
                    <p className='text-gray-900'>Phone</p>
                  </div>
                  <div className='flex-1 py-8'>
                    <p className='text-gray-600 font-light'>
                      {data.data.phone}
                    </p>
                  </div>
                </div>
              </li>
            </>
          )}
        </ul>
        <div className='space-x-4 mt-8'>
          <Link to={'/author/$authorId/edit'} params={{ authorId: authorId }}>
            <RButton variant='blue'>
              <GoPencil className='w-4 h-4 inline align-text-top mr-2' />
              <span className=''>Edit</span>
            </RButton>
          </Link>
          <RButton>
            <FiTrash className='w-4 h-4 inline align-text-top mr-2' />
            <span className=''>Delete</span>
          </RButton>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
