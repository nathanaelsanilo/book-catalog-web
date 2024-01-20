import { AxiosResponse } from 'axios';

export type HttpResponse<TResponse, TRequest = unknown> = Promise<
  AxiosResponse<TResponse, TRequest>
>;
