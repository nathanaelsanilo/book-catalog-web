import { AppPage, PublisherCard, RButton } from '@/components';
import { RGrid } from '@/components/RGrid';
import { usePublisherListQuery } from '@/hooks';
import { Link } from '@tanstack/react-router';
import { useTitle } from 'react-use';

const IndexPage = () => {
  useTitle('Publisher');

  const { data } = usePublisherListQuery();

  return (
    <AppPage
      title='Publisher'
      action={
        <AppPage.PageAction>
          <Link to='/publisher/create'>
            <RButton variant='blue'>Create new publisher</RButton>
          </Link>
        </AppPage.PageAction>
      }
    >
      <RGrid cols={4}>
        <RGrid.RGridItem>
          {data
            ? data.data.map((item) => (
                <PublisherCard
                  key={item.secureId}
                  secureId={item.secureId}
                  name={item.name}
                  email={item.email}
                />
              ))
            : null}
        </RGrid.RGridItem>
      </RGrid>
    </AppPage>
  );
};

export default IndexPage;
