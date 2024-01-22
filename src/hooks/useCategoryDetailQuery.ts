import { categoryService } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useCategoryDetailQuery = (
  secureId: string,
  conf?: { enabled: boolean },
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['category', 'detail', { secureId }],
    queryFn: () => categoryService.getDetail(secureId),
    enabled: conf?.enabled ?? true,
  });

  return { data, isLoading, isError };
};
