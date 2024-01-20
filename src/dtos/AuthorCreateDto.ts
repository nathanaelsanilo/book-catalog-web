export class AuthorCreateDto {
  private author_name: string = '';
  private email: string = '';
  private phone: string = '';

  setAuthorName(val: string): this {
    this.author_name = val;
    return this;
  }

  getAuthorName(): string {
    return this.author_name;
  }

  setEmail(val: string): this {
    this.email = val;
    return this;
  }

  getEmail(): string {
    return this.email;
  }

  setPhone(val: string): this {
    this.phone = val;
    return this;
  }

  getPhone(): string {
    return this.phone;
  }
}
