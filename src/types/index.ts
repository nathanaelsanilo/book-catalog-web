import { AxiosResponse } from 'axios';

export type HttpResponse<TResponse, TRequest> = Promise<
  AxiosResponse<TResponse, TRequest>
>;
