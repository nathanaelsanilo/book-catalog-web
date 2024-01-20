import { AuthorCreateDto, AuthorDetailDto } from '@/dtos';
import { authorService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useAuthorCreateMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<AuthorDetailDto, AuthorCreateDto>,
    unknown,
    AuthorCreateDto,
    unknown
  >,
) => {
  return useMutation({
    mutationFn: (payload) => authorService.create(payload),
    ...conf,
  });
};
