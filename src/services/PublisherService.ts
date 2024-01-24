import { Endpoint } from '@/const';
import { PublisherListDto } from '@/dtos';
import { HttpResponse } from '@/types';
import { httpService } from '.';

const publisherService = {
  getList(): HttpResponse<PublisherListDto[]> {
    return httpService.get(Endpoint.PUBLISHER_LIST);
  },
};

export default publisherService;
