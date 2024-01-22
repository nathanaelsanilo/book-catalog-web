import { Endpoint } from '@/const';
import { CategoryCreateDto, CategoryDetailDto } from '@/dtos';
import { httpService } from '.';
import { HttpResponse } from '@/types';

const categoryService = {
  create(
    data: CategoryCreateDto,
  ): HttpResponse<CategoryDetailDto, CategoryCreateDto> {
    return httpService.post(Endpoint.CATEGORY_CREATE, data);
  },
};

export default categoryService;
