import { AuthorUpdateDto, AuthorDetailDto } from '@/dtos';
import { authorService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

type MutationType = {
  secureId: string;
  payload: AuthorUpdateDto;
};

export const useAuthorUpdateMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<AuthorDetailDto, AuthorUpdateDto>,
    AxiosError,
    MutationType,
    unknown
  >,
) => {
  return useMutation({
    ...conf,
    mutationFn: ({ secureId, payload }) =>
      authorService.update(secureId, payload),
  });
};
