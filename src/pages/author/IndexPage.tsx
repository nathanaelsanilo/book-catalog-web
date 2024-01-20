import { AuthorCard, RTitle, RButton } from '@/components';

const IndexPage = () => {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>Authors</RTitle>
        <RButton variant='blue'>Create new author</RButton>
      </div>
      <hr className='mb-8 mt-4' />
      <div className='grid gap-x-6 gap-y-8 grid-cols-4'>
        {[1, 2].map((e) => (
          <AuthorCard key={e} />
        ))}
      </div>
    </section>
  );
};

export default IndexPage;
