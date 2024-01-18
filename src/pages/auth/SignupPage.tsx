import { AuthField, AuthForm } from '@/components';
import { SignupDto } from '@/dtos';
import { useNotie, useSignupMutation } from '@/hooks';
import { Link } from '@tanstack/react-router';
import { HiUserGroup } from 'react-icons/hi2';

const SignupPage = () => {
  const { success } = useNotie();
  const { mutate, isPending } = useSignupMutation({
    onSuccess() {
      success({ text: 'Success' });
    },
  });
  const onSubmit = (val: AuthField) => {
    const dto = new SignupDto();
    dto.setUsername(val.username);
    dto.setPassword(val.password);
    mutate(dto);
  };

  return (
    <div className='h-full flex justify-center items-center flex-col'>
      <div className='px-12 py-8 w-1/2 border shadow rounded-lg bg-white'>
        <div className=''>
          <div className='mb-12'>
            <HiUserGroup className='h-full fill-blue-700 w-20 mx-auto' />
          </div>
          <h1 className='text-3xl text-zinc-700 text-center font-bold'>
            Create your account
          </h1>
        </div>
        <div className='mt-12'>
          <AuthForm isSignup={true} onSubmit={onSubmit} loading={isPending} />
          <div className='mt-10 text-center'>
            <span className='text-gray-400 text-sm'>
              <Link to='/signin' className='text-blue-400'>
                Login
              </Link>{' '}
              to your account instead
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
