import { CrewQualification } from './crew-qualification';

export class CrewAircraftSeating {
  crewType: string;
  isRequired: boolean;
  crewId: string;
  alias: string;
  firstName: string;
  lastName: string;
  crewTypeDesc: string;
  dob: string;
  age: string;
  domicileAirport: string;
  domicileAirportId: string;
  profileImage: string;

  crewQualifications: CrewQualification[];
}
