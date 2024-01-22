import { RButton, RDivider, RTextField, RTitle } from '@/components';
import { CategoryCreateDto } from '@/dtos';
import { useCategoryCreateMutation, useNotie } from '@/hooks';
import { useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { useTitle } from 'react-use';

type FormValues = {
  name: string;
  description: string;
};

const FormPage = () => {
  useTitle('Create Category');
  const methods = useForm<FormValues>();
  const navigate = useNavigate();
  const { success } = useNotie();
  const { mutate, isPending } = useCategoryCreateMutation({
    onSuccess: ({ data }) => {
      success({
        text: `${data.name} created`,
      });
      navigate({ to: '/category' });
    },
  });

  const onSubmit = methods.handleSubmit((value) => {
    const dto = new CategoryCreateDto({
      name: value.name,
      description: value.description,
    });
    mutate(dto);
  });

  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>{'Create new category'}</RTitle>
      </div>
      <RDivider />
      <div className='mx-auto w-1/2'>
        <FormProvider {...methods}>
          <form noValidate autoComplete='off' onSubmit={onSubmit}>
            <h2 className='text-lg font-bold mb-4'>{'Create new category'}</h2>
            <div className='space-y-6'>
              <RTextField
                validation={{ required: 'Required!' }}
                label='Category Name'
                id='name'
              />
              <RTextField label='Description' id='description' />
              <RButton variant='blue' type='submit' loading={isPending}>
                Add category
              </RButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default FormPage;
