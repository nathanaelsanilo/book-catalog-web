import { HiOutlineTag } from 'react-icons/hi';

type Props = {
  name: string;
  description?: string;
};

const CategoryCard = ({ name, description = '' }: Props) => {
  return (
    <div className='bg-white border border-gray-300 rounded-lg w-full flex items-center gap-x-6 px-8 py-4'>
      <div>
        <HiOutlineTag className='h-6 w-6' />
      </div>
      <div>
        <h4 className='text-gray-900'>{name}</h4>
        <p className='text-sm text-gray-500 text-ellipsis'>{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
