import { PublisherDetailDto, PublisherUpdateDto } from '@/dtos';
import { publisherService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

type MutationType = {
  secureId: string;
  payload: PublisherUpdateDto;
};

export const usePublisherUpdateMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<PublisherDetailDto, PublisherUpdateDto>,
    AxiosError,
    MutationType,
    unknown
  >,
) => {
  return useMutation({
    ...conf,
    mutationFn: ({ secureId, payload }) =>
      publisherService.update(secureId, payload),
  });
};
