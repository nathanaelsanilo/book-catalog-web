import { AuthorDetailDto } from '@/dtos';
import { authorService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useAuthorDeleteMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<AuthorDetailDto>,
    unknown,
    string,
    unknown
  >,
) => {
  const { mutate, isPending } = useMutation({
    ...conf,
    mutationFn: (secureId) => authorService.delete(secureId),
  });

  return { mutate, isPending };
};
