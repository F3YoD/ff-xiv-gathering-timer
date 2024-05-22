import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location.dto';
import { RessourceDto } from './ressource.dto';

export class GatheringPointDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly location: LocationDto;

  @ApiProperty({ type: [RessourceDto] })
  readonly ressource: RessourceDto[];

  @ApiProperty()
  readonly gatheringCategory: string;

  @ApiProperty()
  readonly startingHour: number;

  @ApiProperty()
  readonly endingHour: number;
}
