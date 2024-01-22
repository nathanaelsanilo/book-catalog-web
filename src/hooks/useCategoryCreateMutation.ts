import { CategoryCreateDto, CategoryDetailDto } from '@/dtos';
import { categoryService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useCategoryCreateMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<CategoryDetailDto, CategoryCreateDto>,
    AxiosError,
    CategoryCreateDto,
    unknown
  >,
) => {
  return useMutation({
    mutationFn: (payload) => categoryService.create(payload),
    ...conf,
  });
};
