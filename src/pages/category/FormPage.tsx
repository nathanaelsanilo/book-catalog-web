import { RButton, RDivider, RTextField, RTitle } from '@/components';
import { CategoryCreateDto, CategoryUpdateDto } from '@/dtos';
import {
  useCategoryCreateMutation,
  useCategoryDetailQuery,
  useCategoryUpdateMutation,
  useNotie,
} from '@/hooks';
import { useNavigate, useParams } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import { useTitle } from 'react-use';

type FormValues = {
  name: string;
  description: string;
};

const FormPage = () => {
  useTitle('Create Category');
  const params = useParams({ from: '/app-layout/category/$categoryId' });
  const navigate = useNavigate();
  const { success } = useNotie();

  const { data } = useCategoryDetailQuery(params.categoryId, {
    enabled: !!params.categoryId,
  });

  const methods = useForm<FormValues>({
    values: {
      description: data?.data.description ?? '',
      name: data?.data.name ?? '',
    },
  });

  const { mutate: doCreate, isPending: isCreating } = useCategoryCreateMutation(
    {
      onSuccess: ({ data }) => {
        success({
          text: `${data.name} created`,
        });
        navigate({ to: '/category' });
      },
    },
  );

  const { mutate: doUpdate, isPending: isUpdating } = useCategoryUpdateMutation(
    {
      onSuccess: ({ data }) => {
        success({
          text: `${data.name} updated`,
        });
        navigate({
          to: '/category/$categoryId',
          params: { categoryId: params.categoryId },
        });
      },
    },
  );

  const onSubmit = methods.handleSubmit((value) => {
    if (params.categoryId) {
      const dto = new CategoryUpdateDto({
        description: value.description,
        name: value.name,
      });
      doUpdate({ secureId: params.categoryId, payload: dto });
    } else {
      const dto = new CategoryCreateDto({
        name: value.name,
        description: value.description,
      });
      doCreate(dto);
    }
  });

  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>
          {params.categoryId ? 'Edit category' : 'Create new category'}
        </RTitle>
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
              <RButton
                variant='blue'
                type='submit'
                loading={isCreating || isUpdating}
              >
                {params.categoryId ? 'Update category' : 'Add category'}
              </RButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default FormPage;
