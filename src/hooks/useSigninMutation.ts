import { SigninDto, SigninResDto } from '@/dtos';
import { authService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useSigninMutation = (
  conf?: UseMutationOptions<
    AxiosResponse<SigninResDto>,
    unknown,
    SigninDto,
    unknown
  >,
) => {
  return useMutation({
    mutationFn: (dto) => authService.signin(dto),
    ...conf,
  });
};
