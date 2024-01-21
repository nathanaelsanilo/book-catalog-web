import { AuthorCard, RTitle, RButton, RDivider } from '@/components';
import { useAuthorListQuery } from '@/hooks';
import { Link } from '@tanstack/react-router';
import { useTitle } from 'react-use';

const IndexPage = () => {
  useTitle('Authors');
  const { data, isLoading } = useAuthorListQuery();
  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>Authors</RTitle>
        <Link to='/author/create'>
          <RButton variant='blue'>Create new author</RButton>
        </Link>
      </div>
      <RDivider />
      <div className='grid gap-x-6 gap-y-8 grid-cols-4'>
        {!isLoading && data
          ? data.data.map((e) => (
              <AuthorCard
                email={e.email}
                phone={e.phone}
                name={e.name}
                secureId={e.secureId}
                key={e.secureId}
              />
            ))
          : 'loading..'}
      </div>
    </section>
  );
};

export default IndexPage;
