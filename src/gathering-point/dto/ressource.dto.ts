import { ApiProperty } from '@nestjs/swagger';

export class RessourceDto {
  @ApiProperty()
  itemId: number;

  @ApiProperty()
  level: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isCollectionRessource: boolean;
}
