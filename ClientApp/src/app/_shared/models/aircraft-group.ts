import { AircraftTemplate } from "../model-list";

export class AircraftGroup {
  aircraftGroupId: number;
  aircraftGroupName: string;
  active: number;

  aircraftTemplates: AircraftTemplate[];
}
