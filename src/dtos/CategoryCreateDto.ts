export class CategoryCreateDto {
  name: string = '';
  description: string = '';

  constructor(val?: Partial<CategoryCreateDto>) {
    Object.assign(this, val);
  }
}
