import { type AlertOptions, alert } from 'notie';

const useNotie = () => {
  const success = (opt: AlertOptions) => {
    alert({
      ...opt,
      type: 'success',
    });
  };

  return { success };
};

export { useNotie };
