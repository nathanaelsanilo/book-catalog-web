import { PublisherListDto } from '@/dtos';
import { publisherService } from '@/services';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const usePublisherListQuery = (
  conf?: UseQueryOptions<AxiosResponse<PublisherListDto[]>>,
) => {
  return useQuery({
    ...conf,
    queryKey: ['publisher', 'all'],
    queryFn: () => publisherService.getList(),
  });
};
