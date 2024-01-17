import { httpService } from '.';
import { Endpoint } from '@/const';

const authService = {
  signup() {
    return httpService.post(Endpoint.SIGNUP, {});
  },
  signin() {
    return httpService.post(Endpoint.SIGNIN, {});
  },
};

export default authService;
