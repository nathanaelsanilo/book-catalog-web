export class PublisherCreateDto {
  name!: string;
  email!: string;
  description!: string;
  active!: boolean;

  constructor(val?: Partial<PublisherCreateDto>) {
    Object.assign(this, val);
  }
}
