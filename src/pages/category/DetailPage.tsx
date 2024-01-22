import { RDivider, RTitle } from '@/components';
import { useParams } from '@tanstack/react-router';
import { useCategoryDetailQuery } from '@/hooks';
import { useTitle } from 'react-use';

const DetailPage = () => {
  useTitle('Category Detail');
  const { categoryId } = useParams({
    from: '/app-layout/category/$categoryId',
  });
  const { data, isLoading } = useCategoryDetailQuery(categoryId);
  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>Category Information</RTitle>
      </div>
      <RDivider />
      <div className='container mx-auto w-1/2'>
        <h3 className='text-lg text-gray-900 mb-2'>Category Information</h3>
        <h5 className='text-sm text-gray-400 mb-8'>
          Category details and information.
        </h5>
        {data && !isLoading ? (
          <ul className='divide-y divide-gray-200'>
            <>
              <li className='border-t border-gray-200'>
                <div className='flex flex-row'>
                  <div className='w-1/3 py-8'>
                    <p className='text-gray-900'>Category name</p>
                  </div>
                  <div className='flex-1 py-8'>
                    <p className='text-gray-600 font-light'>{data.data.name}</p>
                  </div>
                </div>
              </li>
              <li className='border-t border-gray-200'>
                <div className='flex flex-row'>
                  <div className='w-1/3 py-8'>
                    <p className='text-gray-900'>Description</p>
                  </div>
                  <div className='flex-1 py-8'>
                    <p className='text-gray-600 font-light'>
                      {data.data.description}
                    </p>
                  </div>
                </div>
              </li>
            </>
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default DetailPage;
