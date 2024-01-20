import { AuthorCard, RTitle, RButton, RDivider } from '@/components';
import { Link } from '@tanstack/react-router';

const IndexPage = () => {
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
        {[1, 2].map((e) => (
          <AuthorCard key={e} />
        ))}
      </div>
    </section>
  );
};

export default IndexPage;
