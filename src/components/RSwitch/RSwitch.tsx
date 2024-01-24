import { Switch } from '@headlessui/react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';

type Props = {
  label?: string;
  id: string;
  validation?: RegisterOptions;
};

const RSwitch = ({ label, id, validation }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={id}
      control={control}
      rules={validation}
      render={({ field }) => (
        <div className=''>
          <Switch.Group>
            <div className='flex flex-col gap-y-1'>
              <Switch.Label>{label}</Switch.Label>
              <Switch
                {...field}
                defaultChecked={field.value}
                className='relative inline-flex ui-not-checked:bg-gray-300 ui-checked:bg-blue-700 h-[30px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-blue-700'
              >
                <span
                  aria-hidden='true'
                  className='pointer-events-none ui-checked:translate-x-6 ui-not-checked:translate-x-0 inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>
      )}
    ></Controller>
  );
};

export default RSwitch;
