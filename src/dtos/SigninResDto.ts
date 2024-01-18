export class SigninResDto {
  access_token!: string;

  setAccessToken(val: string): this {
    this.access_token = val;
    return this;
  }
}
