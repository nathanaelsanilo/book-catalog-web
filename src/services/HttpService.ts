import { StorageKey } from '@/const';
import { router } from '@/router';
import { HttpResponse } from '@/types';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const noAuthRoutes = ['/auth/signin', '/auth/signup'];

instance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem(StorageKey.AccessToken);
    if (req.url && !noAuthRoutes.includes(req.url) && token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    console.log({ err, from: 'req' });
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    if (res.data && res.data.statusCode === 401) {
      console.log('res: do logout');
    }
    return res;
  },
  (err) => {
    console.log({ err });
    // const setUser = useAuthStore((st) => st.setUser);
    if (err.response.status === 401) {
      // setUser(new UserDetailDto());
      console.log('Unauthorized');
      localStorage.clear();
      router.navigate({ to: '/signin' });
    }
    return Promise.reject(err);
  },
);

const httpService = {
  get<TResponse>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<TResponse>> {
    return instance.get(url, config);
  },
  post<TResponse, TData>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig<TData>,
  ): Promise<AxiosResponse<TResponse, TData>> {
    return instance.post(url, data, config);
  },
  patch<TResponse, TData>(
    url: string,
    data: TData,
  ): HttpResponse<TResponse, TData> {
    return instance.request({
      url,
      method: 'PATCH',
      data,
    });
  },
} as const;

export default httpService;
