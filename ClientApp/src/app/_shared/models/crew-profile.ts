import { CrewQualification } from "./crew-qualification";

export class CrewProfile {
  crewId: string;
  alias: string;
  lastName: string;
  firstName: string;
  dob: Date;
  age: number;
  profileImage: string;
  domicileAirport: string;

  crewQualifications: CrewQualification[];
}

