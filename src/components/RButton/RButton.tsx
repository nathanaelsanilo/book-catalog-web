import { clsxm } from '@/utils';
import { ComponentPropsWithoutRef } from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';

type Variant = 'blue' | 'default' | 'ghost' | 'red';
type Props = {
  block?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  variant?: Variant;
} & ComponentPropsWithoutRef<'button'>;

const RButton = ({
  variant = 'default',
  loading,
  block,
  children,
  disabled,
  ...rest
}: Props) => {
  const isDisabled = loading || disabled;
  const classes = clsxm(
    'rounded-lg border text-white px-4 py-2 min-w-32 font-normal shadow transition-all ease-in-out',
    {
      'border-0 active:bg-slate-200 hover:bg-slate-100 shadow-none text-gray-900 ':
        variant === 'ghost',
      'bg-white active:bg-slate-200 hover:bg-slate-100 text-gray-900':
        variant === 'default',
      'bg-blue-700 text-white active:bg-blue-900 hover:bg-blue-500':
        variant === 'blue',
      'bg-red-600 text-white active:bg-red-900 hover:bg-red-500':
        variant === 'red',
      'w-full': block,
      'bg-blue-400 cursor-not-allowed hover:bg-blue-400 active:bg-blue-400':
        isDisabled,
      'cursor-progress': loading,
    },
  );

  return (
    <button {...rest} disabled={isDisabled} className={classes}>
      {loading ? (
        <CgSpinnerAlt className='animate-spin h-5 w-5 mr-3 inline' />
      ) : null}
      {children}
    </button>
  );
};

export default RButton;
