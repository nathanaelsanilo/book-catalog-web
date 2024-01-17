import { SignupDto } from '@/dtos';
import { authService } from '@/services';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const useSignupMutation = (
  config?: UseMutationOptions<AxiosResponse<void>, unknown, SignupDto, unknown>,
) => {
  return useMutation({
    mutationFn: (payload) => authService.signup(payload),
    ...config,
  });
};
