import { CategoryDetailDto } from '@/dtos';
import { categoryService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useCategoryDeleteMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<CategoryDetailDto>,
    unknown,
    string,
    unknown
  >,
) => {
  const { mutate, isPending } = useMutation({
    ...conf,
    mutationFn: (secureId) => categoryService.delete(secureId),
  });

  return { mutate, isPending };
};
