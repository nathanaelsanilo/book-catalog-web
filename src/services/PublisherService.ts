import { Endpoint } from '@/const';
import {
  PublisherCreateDto,
  PublisherDetailDto,
  PublisherListDto,
  PublisherUpdateDto,
} from '@/dtos';
import { HttpResponse } from '@/types';
import { httpService } from '.';

const publisherService = {
  getList(): HttpResponse<PublisherListDto[]> {
    return httpService.get(Endpoint.PUBLISHER_LIST);
  },
  create(
    dto: PublisherCreateDto,
  ): HttpResponse<PublisherDetailDto, PublisherCreateDto> {
    return httpService.post(Endpoint.PUBLISHER_CREATE, dto);
  },
  getDetail(secureId: string): HttpResponse<PublisherDetailDto> {
    return httpService.get(Endpoint.PUBLISHER_DETAIL(secureId));
  },
  update(
    secureId: string,
    data: PublisherUpdateDto,
  ): HttpResponse<PublisherDetailDto, PublisherUpdateDto> {
    return httpService.patch(Endpoint.PUBLISHER_UPDATE(secureId), data);
  },
};

export default publisherService;
