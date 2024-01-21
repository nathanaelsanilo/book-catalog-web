import { UserDetailDto } from '@/dtos';
import { authService } from '@/services';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useMeQuery = (
  conf?: UseQueryOptions<AxiosResponse<UserDetailDto>>,
) => {
  return useQuery({
    ...conf,
    queryKey: ['auth', 'me'],
    queryFn: () => authService.getMe(),
  });
};
