export class AuthorListDto {
  name = '';
  email = '';
  phone = '';
  secureId = '';

  constructor(val?: Partial<AuthorListDto>) {
    Object.assign(this, val);
  }
}
