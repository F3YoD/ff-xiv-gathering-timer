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
    const create = await this.gatheringPointModel.create(
      createGatheringPointDto,
    );
    return create;
  }

  async findAll(): Promise<GatheringPointDocument[]> {
    return await this.gatheringPointModel.find().exec();
  }

  async findOne(id: string): Promise<GatheringPointDocument> {
    return await this.gatheringPointModel.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<GatheringPointDocument> {
    const deletePoint = await this.gatheringPointModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletePoint;
  }
}
