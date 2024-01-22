import { Endpoint } from '@/const';
import {
  CategoryCreateDto,
  CategoryDetailDto,
  CategoryListDto,
  CategoryUpdateDto,
} from '@/dtos';
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
  update(
    secureId: string,
    dto: CategoryUpdateDto,
  ): HttpResponse<CategoryDetailDto, CategoryUpdateDto> {
    return httpService.patch(Endpoint.CATEGORY_UPDATE(secureId), dto);
  },
};

export default categoryService;
