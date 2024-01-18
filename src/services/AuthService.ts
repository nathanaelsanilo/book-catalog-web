import { Endpoint } from '@/const';
import type { SigninDto, SigninResDto, SignupDto } from '@/dtos';
import { type AxiosResponse } from 'axios';
import { httpService } from '.';

const authService = {
  signup(dto: SignupDto): Promise<AxiosResponse<void, SignupDto>> {
    return httpService.post(Endpoint.SIGNUP, dto);
  },
  signin(dto: SigninDto): Promise<AxiosResponse<SigninResDto>> {
    return httpService.post(Endpoint.SIGNIN, dto);
  },
};

export default authService;
