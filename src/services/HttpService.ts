import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

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
