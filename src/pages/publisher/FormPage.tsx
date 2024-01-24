import { RButton, RDivider, RTextField, RTitle, RSwitch } from '@/components';
import { PublisherCreateDto } from '@/dtos';
import { useNotie, usePublisherCreateMutation } from '@/hooks';
import { useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { useTitle } from 'react-use';

const FormPage = () => {
  useTitle('Create Publisher');
  const { success } = useNotie();
  const navigate = useNavigate({ from: '/publisher/create' });

  const methods = useForm<PublisherCreateDto>({
    defaultValues: {
      active: true,
    },
  });

  const { mutate: doCreate, isPending: isCreating } =
    usePublisherCreateMutation({
      onSuccess: ({ data }) => {
        success({ text: `${data.name} created` });
        navigate({ to: '/publisher' });
      },
    });

  const onSubmit = methods.handleSubmit((val) => {
    const dto = new PublisherCreateDto({
      active: val.active,
      description: val.description,
      email: val.email,
      name: val.name,
    });
    doCreate(dto);
  });

  return (
    <section>
      <div className='flex items-center justify-between '>
        <RTitle>Create new publisher</RTitle>
      </div>
      <RDivider />
      <div className='mx-auto w-1/2'>
        <FormProvider {...methods}>
          <form noValidate autoComplete='off' onSubmit={onSubmit}>
            <h2 className='text-lg font-bold mb-4'>Create new publisher</h2>
            <div className='space-y-6'>
              <div className='flex items-center gap-x-8'>
                <div className='flex-1'>
                  <RTextField
                    validation={{ required: 'Required!' }}
                    label='Publisher name'
                    id='name'
                  />
                </div>
                <div className='flex-1'>
                  <RTextField label='Email' id='email' />
                </div>
              </div>
              <RTextField label='Description' id='description' />
              <RSwitch label='Active' id='active' />
              <RButton variant='blue' type='submit' loading={isCreating}>
                Add publisher
              </RButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default FormPage;
