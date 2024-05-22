import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Ressource {
  @Prop()
  itemId: number;

  @Prop()
  level: number;

  @Prop()
  name: string;

  @Prop()
  isCollectionRessource: boolean;
}

export const RessourceSchema = SchemaFactory.createForClass(Ressource);
