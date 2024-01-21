import { authorService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useAuthorDetailQuery = (
  secureId: string,
  conf?: { enabled: boolean },
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['author', 'detail', { secureId }],
    queryFn: () => authorService.getDetail(secureId),
    enabled: conf?.enabled ?? false,
  });

  return { data, isLoading, isError };
};
