import { GatheringPointDto } from '../dto/gathering-point.dto';
import { GatheringPointDocument } from '../schema/gathering-point.schema';

export function gatheringPointSchemaToDto(
  gatheringPointDocument: GatheringPointDocument,
): GatheringPointDto {
  return {
    id: gatheringPointDocument._id.toString(),

    location: gatheringPointDocument.location,

    ressource: gatheringPointDocument.ressource.map((v) => ({ ...v })),

    gatheringCategory: gatheringPointDocument.gatheringCategory,

    startingHour: gatheringPointDocument.startingHour,

    endingHour: gatheringPointDocument.endingHour,
  };
}
