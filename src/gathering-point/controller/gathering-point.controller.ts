import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateGatheringPoint } from '../dto/create-gathering-point.dto';
import { GatheringPointService } from '../service/gathering-point.service';
import { gatheringPointSchemaToDto } from '../utils/gathering-points.utils';
import { ApiOkResponse } from '@nestjs/swagger';
import { GatheringPointDto } from '../dto/gathering-point.dto';

@Controller('gathering-points')
export class GatheringPointController {
  constructor(private readonly gatheringPointService: GatheringPointService) {}

  @Post()
  async create(@Body() createGatheringPoint: CreateGatheringPoint) {
    await this.gatheringPointService.create(createGatheringPoint);
  }

  @Get()
  @ApiOkResponse({
    type: GatheringPointDto,
    isArray: true,
  })
  async getAll(): Promise<GatheringPointDto[]> {
    return this.gatheringPointService
      .findAll()
      .then((points) =>
        points.map((point) => gatheringPointSchemaToDto(point)),
      );
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GatheringPointDto> {
    return this.gatheringPointService
      .findOne(id)
      .then((point) => gatheringPointSchemaToDto(point));
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return this.gatheringPointService
      .delete(id)
      .then((point) => gatheringPointSchemaToDto(point));
  }
}
