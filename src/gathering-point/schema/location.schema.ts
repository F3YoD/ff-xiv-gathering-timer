import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Location {
  @Prop()
  posX: number;

  @Prop()
  posY: number;

  @Prop()
  region: string;

  @Prop()
  subRegion: string;
}

export const PositionSchema = SchemaFactory.createForClass(Location);
