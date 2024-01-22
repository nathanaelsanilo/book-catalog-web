export class CategoryDetailDto {
  name: string = '';
  description: string = '';

  constructor(val?: Partial<CategoryDetailDto>) {
    Object.assign(this, val);
  }
}
