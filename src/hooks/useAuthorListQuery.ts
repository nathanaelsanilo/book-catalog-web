import { AuthorListDto } from '@/dtos';
import { authorService } from '@/services';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useAuthorListQuery = (
  conf?: UseQueryOptions<AxiosResponse<AuthorListDto[]>>,
) => {
  return useQuery({
    ...conf,
    queryKey: ['author', 'all'],
    queryFn: () => authorService.getList(),
  });
};
