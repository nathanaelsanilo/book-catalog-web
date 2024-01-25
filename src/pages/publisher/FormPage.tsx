import { RButton, RDivider, RSwitch, RTextField, RTitle } from '@/components';
import { PublisherCreateDto, PublisherUpdateDto } from '@/dtos';
import {
  useNotie,
  usePublisherCreateMutation,
  usePublisherDetailQuery,
  usePublisherUpdateMutation,
} from '@/hooks';
import { useNavigate, useParams } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { useTitle } from 'react-use';

const FormPage = () => {
  const { success } = useNotie();
  const { publisherId } = useParams({
    from: '/app-layout/publisher/$publisherId/edit',
  });
  useTitle(publisherId ? 'Edit Publisher' : 'Create Publisher');
  const navigate = useNavigate({ from: '/publisher/create' });

  const { data } = usePublisherDetailQuery(publisherId, {
    enabled: !!publisherId,
  });

  const methods = useForm<PublisherCreateDto>({
    values: {
      active: data?.data.active ?? true,
      description: data?.data.description ?? '',
      email: data?.data.email ?? '',
      name: data?.data.name ?? '',
    },
  });

  const { mutate: doUpdate, isPending: isUpdating } =
    usePublisherUpdateMutation({
      onSuccess: ({ data }) => {
        success({
          text: `${data.name} updated!`,
        });
        navigate({ to: '/publisher/$publisherId', params: { publisherId } });
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
    if (publisherId) {
      const dto = new PublisherUpdateDto({
        active: val.active,
        description: val.description,
        email: val.email,
        name: val.name,
      });
      doUpdate({ payload: dto, secureId: publisherId });
    } else {
      const dto = new PublisherCreateDto({
        active: val.active,
        description: val.description,
        email: val.email,
        name: val.name,
      });
      doCreate(dto);
    }
  });

  return (
    <section>
      <div className='flex items-center justify-between '>
        <RTitle>{publisherId ? 'Update publisher' : 'Create publisher'}</RTitle>
      </div>
      <RDivider />
      <div className='mx-auto w-1/2'>
        <FormProvider {...methods}>
          <form noValidate autoComplete='off' onSubmit={onSubmit}>
            <h2 className='text-lg font-bold mb-4'>
              {publisherId ? 'Update publisher' : 'Create publisher'}
            </h2>
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
              <RButton
                variant='blue'
                type='submit'
                loading={isCreating || isUpdating}
              >
                {publisherId ? 'Update publisher' : 'Add publisher'}
              </RButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default FormPage;
