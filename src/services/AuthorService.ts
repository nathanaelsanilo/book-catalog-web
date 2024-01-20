import { Endpoint } from '@/const';
import { AuthorCreateDto, AuthorDetailDto, AuthorListDto } from '@/dtos';
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
};

export default authorService;
