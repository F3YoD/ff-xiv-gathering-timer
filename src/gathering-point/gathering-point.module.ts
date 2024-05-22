import { Module } from '@nestjs/common';
import { GatheringPointService } from './service/gathering-point.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  GatheringPoint,
  GatheringPointSchema,
} from './schema/gathering-point.schema';
import { GatheringPointController } from './controller/gathering-point.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GatheringPoint.name, schema: GatheringPointSchema },
    ]),
  ],
  controllers: [GatheringPointController],
  providers: [GatheringPointService],
})
export class GatheringPointModule {}
