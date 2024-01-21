import { Endpoint } from '@/const';
import type { SigninDto, SigninResDto, SignupDto, UserDetailDto } from '@/dtos';
import { HttpResponse } from '@/types';
import { httpService } from '.';

const authService = {
  signup(dto: SignupDto): HttpResponse<void, SignupDto> {
    return httpService.post(Endpoint.SIGNUP, dto);
  },
  signin(dto: SigninDto): HttpResponse<SigninResDto> {
    return httpService.post(Endpoint.SIGNIN, dto);
  },
  getMe(): HttpResponse<UserDetailDto> {
    return httpService.get(Endpoint.ME);
  },
};

export default authService;
