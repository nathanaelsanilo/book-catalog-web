import { Endpoint } from '@/const';
import { type SignupDto } from '@/dtos';
import { type AxiosResponse } from 'axios';
import { httpService } from '.';

const authService = {
  signup(dto: SignupDto): Promise<AxiosResponse<void, SignupDto>> {
    return httpService.post(Endpoint.SIGNUP, dto);
  },
  signin() {
    return httpService.post(Endpoint.SIGNIN, {});
  },
};

export default authService;
