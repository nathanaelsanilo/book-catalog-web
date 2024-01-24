export class PublisherDetailDto {
  secureId!: string;
  name!: string;
  email!: string;
  description!: string;
  active!: boolean;

  constructor(val?: Partial<PublisherDetailDto>) {
    Object.assign(this, val);
  }
}
