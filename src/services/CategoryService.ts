import { Endpoint } from '@/const';
import { CategoryCreateDto, CategoryDetailDto, CategoryListDto } from '@/dtos';
import { httpService } from '.';
import { HttpResponse } from '@/types';

const categoryService = {
  create(
    data: CategoryCreateDto,
  ): HttpResponse<CategoryDetailDto, CategoryCreateDto> {
    return httpService.post(Endpoint.CATEGORY_CREATE, data);
  },
  getList(): HttpResponse<CategoryListDto[]> {
    return httpService.get(Endpoint.CATEGORY_LIST);
  },
  getDetail(secureId: string): HttpResponse<CategoryDetailDto> {
    return httpService.get(Endpoint.CATEGORY_DETAIL(secureId));
  },
};

export default categoryService;
