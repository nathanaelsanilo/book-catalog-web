import { RTitleProps } from './type';

const RTitle = ({ children }: RTitleProps) => {
  return (
    <h1 className='text-2xl font-semibold text-gray-700 border-l-4 border-blue-500 pl-4'>
      {children}
    </h1>
  );
};

export default RTitle;
