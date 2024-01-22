export class CategoryListDto {
  secureId: string = '';
  name: string = '';

  constructor(val?: Partial<CategoryListDto>) {
    Object.assign(this, val);
  }
}
