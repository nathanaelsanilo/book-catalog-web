import { SlUser } from 'react-icons/sl';
import { HiEnvelope, HiPhone } from 'react-icons/hi2';

interface Props {
  name: string;
  email: string;
  phone: string;
}

const AuthorCard = ({ name, email, phone }: Props) => {
  return (
    <div className='bg-white border-2 border-gray-100 rounded-lg w-full'>
      <div className='flex items-center justify-between w-full px-6 py-8'>
        <div className=''>
          <h4 className='text-gray-600'>{name}</h4>
          <p className='text-gray-400'>{email}</p>
        </div>
        <div>
          <SlUser className='h-9 w-9 border rounded-full fill-gray-400' />
        </div>
      </div>
      <div className='flex items-center w-full border-t border-gray-200 divide-x'>
        <div className='flex-1 flex items-center gap-x-2'>
          <a
            href={`mailto:${email}`}
            className='flex items-center flex-1 justify-center py-2 px-4 gap-x-2'
          >
            <HiEnvelope className='h-5 w-5 fill-gray-400' />
            <span className='text-gray-900'>Email</span>
          </a>
        </div>
        <div className='flex flex-1 items-center gap-x-2'>
          <a
            href={`tel:${phone}`}
            className='flex items-center flex-1 justify-center py-2 px-4 gap-x-2'
          >
            <HiPhone className='h-5 w-5 fill-gray-400' />
            <span className='text-gray-900'>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
