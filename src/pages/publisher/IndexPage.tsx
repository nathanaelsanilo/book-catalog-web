import { AppPage, RButton, PublisherCard } from '@/components';
import { RGrid } from '@/components/RGrid';
import { Link } from '@tanstack/react-router';
import { useTitle } from 'react-use';

const IndexPage = () => {
  useTitle('Publisher');
  return (
    <AppPage
      title='Publisher'
      action={
        <AppPage.PageAction>
          <Link to='/category/create'>
            <RButton variant='blue'>Create new publisher</RButton>
          </Link>
        </AppPage.PageAction>
      }
    >
      <RGrid cols={4}>
        <RGrid.RGridItem>
          <PublisherCard
            name='Gramedia'
            email='gramedia@publisher.com'
          ></PublisherCard>
        </RGrid.RGridItem>
      </RGrid>
    </AppPage>
  );
};

export default IndexPage;
