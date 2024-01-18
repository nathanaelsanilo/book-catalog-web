import { RButton } from '@/components';
import { useForm } from 'react-hook-form';
import { AuthField, Props } from './type';

const AuthForm = ({ onSubmit: propOnSubmit, loading, isSignup }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthField>();

  const onSubmit = handleSubmit((val) => {
    propOnSubmit(val);
  });

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className='flex flex-col gap-2 mb-4'>
        <label htmlFor='username' className='text-gray-700'>
          Username
        </label>
        <input
          type='text'
          id='username'
          className='rounded-md text-gray-700 border-gray-300 shadow-sm bg-gray-50'
          {...register('username', { required: true })}
        />
        <p className=''>
          {errors.username ? (
            <span className='text-red-400 text-sm font-light italic'>
              Field is required!
            </span>
          ) : null}
        </p>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor='password' className='text-gray-700'>
          Password
        </label>
        <input
          type='password'
          {...register('password', { required: true })}
          id='password'
          className='rounded-md text-gray-700 border-gray-300 shadow-sm bg-gray-50'
        />
        <p className=''>
          {errors.password ? (
            <span className='text-red-400 text-sm font-light italic'>
              Field is required!
            </span>
          ) : null}
        </p>
      </div>
      <div className='text-center'>
        <RButton type='submit' loading={loading} block={true}>
          {isSignup ? 'Register' : 'Login'}
        </RButton>
      </div>
    </form>
  );
};

export default AuthForm;
