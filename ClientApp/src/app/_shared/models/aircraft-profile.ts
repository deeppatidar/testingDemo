import { CrewPairing } from "../model-list";

export class AircraftProfile {
  aircraftId: string;
  aircraftGroupId: number;
  aircraftTemplateId: string;
  aircraftType: string;
  aircraftRegno: string;
  crewPairings: CrewPairing[];
}
