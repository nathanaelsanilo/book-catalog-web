import { CategoryListDto } from '@/dtos';
import { categoryService } from '@/services';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useCategoryListQuery = (
  conf?: UseQueryOptions<AxiosResponse<CategoryListDto[]>>,
) => {
  return useQuery({
    ...conf,
    queryKey: ['category', 'all'],
    queryFn: () => categoryService.getList(),
  });
};
