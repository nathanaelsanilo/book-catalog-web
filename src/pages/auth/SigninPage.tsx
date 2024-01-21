import { AuthForm, SigninIllustration, type AuthField } from '@/components';
import { StorageKey } from '@/const';
import { SigninDto } from '@/dtos';
import { useNotie, useSigninMutation } from '@/hooks';
import { Link, useNavigate } from '@tanstack/react-router';
import { PiKeyFill } from 'react-icons/pi';
import { useTitle } from 'react-use';

const SigninPage = () => {
  useTitle('Sign In');
  const { success } = useNotie();
  const navigate = useNavigate();
  const { mutate, isPending } = useSigninMutation({
    onSuccess({ data }) {
      localStorage.setItem(StorageKey.AccessToken, data.access_token);
      success({
        text: 'Sign in Successfully!',
      });
      navigate({ to: '/' });
    },
  });

  const onSubmit = (val: AuthField) => {
    const dto = new SigninDto();
    dto.setUsername(val.username);
    dto.setPassword(val.password);
    mutate(dto);
  };

  return (
    <section className='h-full flex justify-center items-center flex-col'>
      <div className='lg:flex-row flex flex-col items-center justify-center w-full gap-20 lg:px-40 lg:py-28'>
        <div className='w-1/2'>
          <SigninIllustration />
        </div>
        <div className='lg:w-1/2 border shadow bg-white rounded-lg px-12 py-8'>
          <div className='mb-4'>
            <PiKeyFill className='w-9 h-9 fill-blue-700' />
          </div>
          <h1 className='text-2xl text-zinc-700 font-bold mb-8'>
            Sign in to your account
          </h1>
          <AuthForm isSignup={false} onSubmit={onSubmit} loading={isPending} />
          <div className='mt-10 text-center'>
            <span className='text-gray-400 text-sm'>
              Don't have an account yet?{' '}
              <Link to='/signup' className='text-blue-400'>
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
