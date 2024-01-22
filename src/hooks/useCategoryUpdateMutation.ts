import { CategoryDetailDto, CategoryUpdateDto } from '@/dtos';
import { categoryService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

type MutationType = {
  secureId: string;
  payload: CategoryUpdateDto;
};

export const useCategoryUpdateMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<CategoryDetailDto, CategoryUpdateDto>,
    AxiosError,
    MutationType,
    unknown
  >,
) => {
  return useMutation({
    ...conf,
    mutationFn: ({ secureId, payload }) =>
      categoryService.update(secureId, payload),
  });
};
