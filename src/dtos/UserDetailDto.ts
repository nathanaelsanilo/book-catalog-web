export class UserDetailDto {
  username!: string;
  secureId!: string;

  constructor(val?: Partial<UserDetailDto>) {
    Object.assign(this, val);
  }
}
