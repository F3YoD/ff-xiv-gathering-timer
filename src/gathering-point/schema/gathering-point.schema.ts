import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Location } from './location.schema';
import { Ressource } from './ressource.schema';
import { HydratedDocument } from 'mongoose';

export type GatheringPointDocument = HydratedDocument<GatheringPoint>;

@Schema()
export class GatheringPoint {
  @Prop()
  location: Location;

  @Prop()
  ressource: Ressource[];

  @Prop()
  gatheringCategory: string;

  @Prop()
  startingHour: number;

  @Prop()
  endingHour: number;
}

export const GatheringPointSchema =
  SchemaFactory.createForClass(GatheringPoint);
