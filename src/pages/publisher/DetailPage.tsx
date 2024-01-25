import { AppPage, AppDetail } from '@/components';
import { usePublisherDetailQuery } from '@/hooks';
import { useParams } from '@tanstack/react-router';
import { useTitle } from 'react-use';
import {
  IoIosCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from 'react-icons/io';

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
                <IoMdCloseCircleOutline />
              )}
            </AppDetail.Item>
          </AppDetail>
        ) : null}
      </div>
    </AppPage>
  );
};

export default DetailPage;
