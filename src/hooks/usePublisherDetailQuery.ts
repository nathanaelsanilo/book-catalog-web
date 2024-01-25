import { publisherService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const usePublisherDetailQuery = (
  secureId: string,
  conf?: { enabled: boolean },
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['publisher', 'detail', { secureId }],
    queryFn: () => publisherService.getDetail(secureId),
    enabled: conf?.enabled ?? true,
  });

  return { data, isLoading, isError };
};
