import { CategoryCreateDto } from '.';

export class CategoryUpdateDto extends CategoryCreateDto {
  constructor(val?: Partial<CategoryCreateDto>) {
    super(val);
  }
}
