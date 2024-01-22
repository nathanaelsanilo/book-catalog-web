import { useFormContext, RegisterOptions } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  id: string;
  label?: string;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

const RTextField = ({ label, id, type = 'text', validation }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='text-gray-700'>
        {label}
      </label>
      <input
        type={type}
        className='rounded-md text-gray-700 border-gray-300 shadow-sm bg-gray-50'
        {...register(id, validation)}
      />
      <ErrorMessage
        name={id}
        errors={errors}
        render={({ message }) => (
          <p key={type} className='text-red-400 text-sm font-light italic'>
            {message}
          </p>
        )}
      />
    </div>
  );
};

export default RTextField;
