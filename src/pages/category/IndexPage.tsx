import { CategoryCard, RButton, RDivider, RTitle } from '@/components';
import { useCategoryListQuery } from '@/hooks';
import { Link } from '@tanstack/react-router';

const IndexPage = () => {
  const { data, isLoading } = useCategoryListQuery();

  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>Category</RTitle>
        <Link to='/category/create'>
          <RButton variant='blue'>Create new category</RButton>
        </Link>
      </div>
      <RDivider />
      {isLoading ? <p>Loading...</p> : null}
      {data ? (
        <div className='grid gap-x-6 gap-y-8 grid-cols-4'>
          {data.data.map((e) => (
            <CategoryCard key={e.secureId} name={e.name} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default IndexPage;
