import { Injectable } from '@nestjs/common';
import {
  GatheringPoint,
  GatheringPointDocument,
} from '../schema/gathering-point.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGatheringPoint } from '../dto/create-gathering-point.dto';

@Injectable()
export class GatheringPointService {
  constructor(
    @InjectModel(GatheringPoint.name)
    private readonly gatheringPointModel: Model<GatheringPoint>,
  ) {}

  async create(
    createGatheringPointDto: CreateGatheringPoint,
  ): Promise<GatheringPoint> {
    return this.gatheringPointModel.create(createGatheringPointDto);
  }

  async findAll(): Promise<GatheringPointDocument[]> {
    return this.gatheringPointModel.find().exec();
  }

  async findOne(id: string): Promise<GatheringPointDocument> {
    return this.gatheringPointModel.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<GatheringPointDocument> {
    return this.gatheringPointModel.findByIdAndDelete({ _id: id }).exec();
  }
}
