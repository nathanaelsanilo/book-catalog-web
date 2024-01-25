export class PublisherUpdateDto {
  name!: string;
  email!: string;
  description!: string;
  active!: boolean;

  constructor(val?: Partial<PublisherUpdateDto>) {
    Object.assign(this, val);
  }
}
