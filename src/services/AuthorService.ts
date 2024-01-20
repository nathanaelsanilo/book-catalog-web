import { Endpoint } from '@/const';
import { httpService } from '@/services';
import { HttpResponse } from '@/types';
import { AuthorCreateDto, AuthorDetailDto } from '@/dtos';

const authorService = {
  create(
    data: AuthorCreateDto,
  ): HttpResponse<AuthorDetailDto, AuthorCreateDto> {
    return httpService.post(Endpoint.AUTHOR_CREATE, data);
  },
};

export default authorService;
