import { AircraftProfile } from "../model-list";

export class AircraftTemplate {
  id: number;
  aircraftType: string;
  aircraftGroupId: number;
  active: number;

  aircraftProfiles: AircraftProfile[];
}
