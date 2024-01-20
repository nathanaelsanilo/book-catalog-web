import { StorageKey } from '@/const';
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
    console.log({ err });
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log({ err });
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
} as const;

export default httpService;
