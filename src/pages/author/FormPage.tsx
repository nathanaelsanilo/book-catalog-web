import { RButton, RDivider, RTextField, RTitle } from '@/components';
import { AuthorCreateDto } from '@/dtos';
import { useAuthorCreateMutation, useNotie } from '@/hooks';
import { useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm } from 'react-hook-form';

type FormValues = {
  authorName: string;
  email: string;
  phone: string;
};

const FormPage = () => {
  const { success } = useNotie();
  const navigate = useNavigate({ from: '/author/create' });
  const methods = useForm<FormValues>();
  const { mutate, isPending } = useAuthorCreateMutation({
    onSuccess({ data }) {
      success({ text: `${data.author_name} created!` });
      navigate({ to: '/author' });
    },
  });

  const onSubmit = (val: FormValues) => {
    const dto = new AuthorCreateDto();
    dto.setAuthorName(val.authorName);
    dto.setEmail(val.email);
    dto.setPhone(val.phone);
    mutate(dto);
  };
  return (
    <section>
      <div className='flex items-center justify-between'>
        <RTitle>Create new author</RTitle>
      </div>
      <RDivider />
      <div className='mx-auto w-1/2'>
        <FormProvider {...methods}>
          <form
            autoComplete='off'
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <h2 className='text-lg font-bold mb-4'>Create new author</h2>
            <div className='space-y-4'>
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
              <RButton variant='blue' type='submit' loading={isPending}>
                Add author
              </RButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default FormPage;
