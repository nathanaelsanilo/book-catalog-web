export class PublisherListDto {
  name!: string;
  email!: string;
  secureId!: string;

  constructor(val?: Partial<PublisherListDto>) {
    Object.assign(this, val);
  }
}
