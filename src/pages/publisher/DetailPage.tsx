import { AppDetail, AppPage, RButton } from '@/components';
import { usePublisherDetailQuery } from '@/hooks';
import { Link, useParams } from '@tanstack/react-router';
import { GoPencil } from 'react-icons/go';
import {
  IoIosCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from 'react-icons/io';
import { useTitle } from 'react-use';

const DetailPage = () => {
  useTitle('Publisher Detail');
  const params = useParams({ from: '/app-layout/publisher/$publisherId' });

  const { data } = usePublisherDetailQuery(params.publisherId);

  return (
    <AppPage title='Detail Publisher'>
      <div className='container mx-auto w-1/2'>
        <h3 className='text-lg text-gray-900 mb-2'>Publisher Information</h3>
        <h5 className='text-sm text-gray-400 mb-8'>
          Publisher details and information.
        </h5>
        {data ? (
          <AppDetail>
            <AppDetail.Item label='Publisher name' value={data.data.name} />
            <AppDetail.Item label='Email' value={data.data.email} />
            <AppDetail.Item label='Description' value={data.data.description} />
            <AppDetail.Item label='Active'>
              {data.data.active ? (
                <IoIosCheckmarkCircleOutline className='icon-lg text-green-600' />
              ) : (
                <IoMdCloseCircleOutline className='icon-lg text-red-600' />
              )}
            </AppDetail.Item>
          </AppDetail>
        ) : null}
        <div className='space-x-4 mt-8'>
          <Link
            to={'/publisher/$publisherId/edit'}
            params={{ publisherId: params.publisherId }}
          >
            <RButton variant='blue'>
              <GoPencil className='w-4 h-4 inline align-text-top mr-2' />
              <span className=''>Edit</span>
            </RButton>
          </Link>
          {/* <RButton variant='red' loading={isPending} onClick={handleDelete}>
            <FiTrash className='w-4 h-4 inline align-text-top mr-2' />
            <span className=''>Delete</span>
          </RButton> */}
        </div>
      </div>
    </AppPage>
  );
};

export default DetailPage;
