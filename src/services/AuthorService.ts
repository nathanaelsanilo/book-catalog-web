import { Endpoint } from '@/const';
import {
  AuthorCreateDto,
  AuthorDetailDto,
  AuthorListDto,
  AuthorUpdateDto,
} from '@/dtos';
import { httpService } from '@/services';
import { HttpResponse } from '@/types';

const authorService = {
  create(
    data: AuthorCreateDto,
  ): HttpResponse<AuthorDetailDto, AuthorCreateDto> {
    return httpService.post(Endpoint.AUTHOR_CREATE, data);
  },
  getList(): HttpResponse<AuthorListDto[]> {
    return httpService.get(Endpoint.AUTHOR_LIST);
  },
  getDetail(secureId: string): HttpResponse<AuthorDetailDto> {
    return httpService.get(Endpoint.AUTHOR_DETAIL(secureId));
  },
  update(
    secureId: string,
    data: AuthorUpdateDto,
  ): HttpResponse<AuthorDetailDto, AuthorUpdateDto> {
    return httpService.patch(Endpoint.AUTHOR_UPDATE(secureId), data);
  },
};

export default authorService;
