import { clsxm } from '@/utils';
import { ComponentPropsWithoutRef } from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';

type Props = {
  block?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const RButton = ({ loading, block, children, disabled, ...rest }: Props) => {
  const isDisabled = loading || disabled;
  const classes = clsxm(
    'rounded-lg border bg-blue-700 text-white active:bg-blue-900 hover:bg-blue-500 px-4 py-2 min-w-32 font-normal',
    {
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
