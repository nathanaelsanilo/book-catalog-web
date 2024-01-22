import { RButton, RDivider, RTextField, RTitle } from '@/components';
import { AuthorCreateDto, AuthorUpdateDto } from '@/dtos';
import {
  useAuthorCreateMutation,
  useAuthorDetailQuery,
  useAuthorUpdateMutation,
  useNotie,
} from '@/hooks';
import { useNavigate, useParams } from '@tanstack/react-router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTitle } from 'react-use';

type FormValues = {
  authorName: string;
  email: string;
  phone: string;
};

const FormPage = () => {
  const { authorId } = useParams({ from: '/app-layout/author/$authorId/edit' });
  const [isEdit] = useState<boolean>(!!authorId);
  useTitle(isEdit ? 'Edit Author' : 'Create new Author');
  const { data } = useAuthorDetailQuery(authorId, { enabled: !!authorId });
  const { success } = useNotie();
  const navigate = useNavigate({
    from: isEdit ? '/author/$authorId/edit' : '/author/create',
  });
  const methods = useForm<FormValues>({
    values: {
      authorName: data?.data.author_name ?? '',
      email: data?.data.email ?? '',
      phone: data?.data.phone ?? '',
    },
  });

  const { mutate: doCreate, isPending: isCreating } = useAuthorCreateMutation({
    onSuccess: ({ data }) => {
      success({ text: `${data.author_name} created!` });
      navigate({ to: '/author' });
    },
  });

  const { mutate: doUpdate, isPending: isUpdating } = useAuthorUpdateMutation({
    onSuccess: ({ data }) => {
      success({ text: `${data.author_name} updated!` });
      navigate({
        to: '/author/$authorId',
        params: { authorId: data.secureId },
      });
    },
  });

  const onSubmit = (val: FormValues) => {
    if (isEdit) {
      const dto = new AuthorUpdateDto();
      dto.setAuthorName(val.authorName);
      dto.setEmail(val.email);
      dto.setPhone(val.phone);
      doUpdate({ secureId: authorId, payload: dto });
    } else {
      const dto = new AuthorCreateDto();
      dto.setAuthorName(val.authorName);
      dto.setEmail(val.email);
      dto.setPhone(val.phone);
      doCreate(dto);
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>{isEdit ? 'Edit author' : 'Create new author'}</RTitle>
      </div>
      <RDivider />
      <div className='mx-auto w-1/2'>
        <FormProvider {...methods}>
          <form
            autoComplete='off'
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <h2 className='text-lg font-bold mb-4'>
              {isEdit ? 'Edit author' : 'Create new author'}
            </h2>
            <div className='space-y-6'>
              <RTextField
                validation={{ required: 'Required!' }}
                label='Author Name'
                id='authorName'
              />
              <div className='flex md:flex-row flex-col w-full gap-x-8'>
                <div className='flex-1'>
                  <RTextField
                    validation={{ required: 'Required!' }}
                    label='Email'
                    id='email'
                    type='email'
                  />
                </div>
                <div className='flex-1'>
                  <RTextField
                    validation={{ required: 'Required!' }}
                    label='Phone Number'
                    id='phone'
                    type='tel'
                  />
                </div>
              </div>
              <RButton variant='blue' type='submit' loading={isLoading}>
                {isEdit ? 'Update author' : 'Add author'}
              </RButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default FormPage;
