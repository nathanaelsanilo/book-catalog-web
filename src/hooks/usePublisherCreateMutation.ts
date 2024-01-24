import { PublisherCreateDto, PublisherDetailDto } from '@/dtos';
import { publisherService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const usePublisherCreateMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<PublisherDetailDto, PublisherCreateDto>,
    AxiosError,
    PublisherCreateDto,
    unknown
  >,
) => {
  return useMutation({
    ...conf,
    mutationFn: (payload) => publisherService.create(payload),
  });
};
