import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty()
  posX: number;

  @ApiProperty()
  posY: number;

  @ApiProperty()
  region: string;

  @ApiProperty()
  subRegion: string;
}
